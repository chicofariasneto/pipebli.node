const Cliente = require('./Client.class');
const Transporte = require('./Transport.class');
const Item = require('./Item.class');
const Parcela = require('./Portion.class');

/**
 *
 * @param items
 * @returns {[Item]}
 */
const createItems = (items) => {
    const itemsObj = [];

    items.forEach(element => {
        if (element !== undefined)
            itemsObj.push(new Item(element.codigo, element.descricao, element.un, element.qtde));
    });

    return itemsObj;
}

/**
 *
 * @param parcelas
 * @returns {[Parcela]}
 */
const createPortions = (parcelas) => {
    const parcelasObj = [];

    parcelas.forEach(element => {
        if (element !== undefined)
            parcelasObj.push(new Parcela(element.data, element.vlr, element.obs));
    });

    return parcelasObj;
}

module.exports = class Pedido {
    /**
     *
     * @param cliente
     * @param transporte
     * @param itens
     * @param parcelas
     * @param vlrFrete
     * @param vlrDesconto
     * @param obs
     * @param obsInternas
     */
    constructor(cliente, transporte, itens, parcelas, vlrFrete, vlrDesconto, obs, obsInternas) {
        if (cliente !== undefined)
            this.cliente = new Cliente(cliente.nome, cliente.tipoPessoa, cliente.endereco, cliente.cpfCnpj,
                cliente.ie, cliente.numero, cliente.complemento, cliente.bairro, cliente.cep, cliente.cidade,
                cliente.uf, cliente.fone, cliente.email);
        else this.cliente = new Cliente();

        if (transporte !== undefined)
            this.transporte = new Transporte(transporte.transportadora, transporte.tipoFrete, transporte.servicoCorreios,
                transporte.dadosEtiqueta, transporte.volumes);
        else this.transporte = new Transporte();

        this.itens = createItems(itens);
        this.parcelas = createPortions(parcelas);
        this.vlr_frete = vlrFrete;
        this.vlr_desconto = vlrDesconto;
        this.obs = obs;
        this.obs_internas = obsInternas;
    }
}