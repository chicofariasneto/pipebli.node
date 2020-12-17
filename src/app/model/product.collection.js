/**
 * Imports mongoose
 */
const mongoose = require('mongoose');
const {Schema} = mongoose;

/**
 * Schema do create an order for save deals from pipedrive
 */
const schema = new Schema({
    _id: {type: Number}, /** I could use Schema.ObjectId but I'm gonna use id from Pipedrive */
    cliente: {type: Object},
    transporte: {type: Object},
    itens: {type: []},
    parcelas: {type: []},
    vlr_frete: {type: Number},
    vlr_desconto: {type: Number},
    obs: {type: String},
    obs_internas: {type: String}
});
const Order = mongoose.model('order', schema);

module.exports = {
    Order
}