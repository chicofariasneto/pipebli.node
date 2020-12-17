const Pedido = require('../class/Order.class');
const {Order} = require('../model/product.collection');
const {dealsWon} = require('./pipedrive.service');
const {sendOrder} = require('./bling.service');
const {createXml} = require('../logic/xml.logic');

/**
 * This a scheduled routine to extract "deals won" of Pipedrive platform
 * and send this data to Bling platform and manage in a mongoDB
 *
 * This scheduled run every
 */
const cron = require("node-cron");
module.exports = () => {
    cron.schedule('0 10 23 * * *', async () => {
        try {
            console.log('running a task every 23 hours');
            const {success, data: {data}} = await dealsWon();

            if (success && data) {
                for (const deal of data) {
                    const {
                        person_name, stage_order_br,
                        creator_user_id: {value},
                        org_name, weighted_value,
                        owner_name, cc_email
                    } = deal;

                    const dealAdded = await Order.findById(deal.id).exec();
                    if (dealAdded === null) {
                        const order = new Pedido(
                            {nome: person_name},
                            {volumes: [{servico: stage_order_br, codigoRastreamento: value}]},
                            [{
                                codigo: value,
                                descricao: org_name,
                                qtd: (Math.floor(Math.random() * (99)) + 1),
                                vlr_unit: weighted_value
                            }],
                            [],
                            weighted_value / 10,
                            weighted_value * 0.5,
                            owner_name,
                            cc_email
                        );

                        /**
                         * Send xml to Bling
                         */
                        const xmlBling = createXml(order);
                        await sendOrder(xmlBling);

                        /**
                         * Saving Order in mongoDb
                         */
                        const orderSaved = new Order({
                            _id: deal.id,
                            cliente: order.cliente,
                            transporte: order.transporte,
                            itens: order.itens,
                            parcelas: order.parcelas,
                            vlr_frete: order.vlr_frete,
                            vlr_desconto: order.vlr_desconto,
                            obs: order.obs,
                            obs_internas: order.obs_internas
                        });
                        await orderSaved.save();
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }, {
        scheduled: true,
        timezone: "America/Sao_Paulo"
    });
}