/**
 * Express imports
 */
const express = require('express');
const router = express.Router();

/**
 * Mongoose collection import
 */
const {Order} = require('../model/product.collection');

/**
 * This route returns all orders are saved in mongoDB
 *
 * @param request
 * @param response
 *
 * @return {Response<[{}]>}
 */
router.get('/', async (request, response) => {
    try {

        const result = await Order.find({});

        return response.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});

module.exports = app => app.use('/orders', router);
