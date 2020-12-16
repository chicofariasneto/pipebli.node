require('dotenv').config();

const axios = require('axios');

/**
 * Credentials of Bling
 */
const bling = {
    url: process.env.BLING_URL,
    apikey: process.env.BLING_APIKEY
}

/**
 * This function send a order to Bling
 *
 * @param xmlData - Order in a XML String
 * @returns {Promise<{data: {}, success: boolean}>}
 */
const sendOrder = async (xmlData) => {
    try {
        /** I have tried pass info and data using params object like: "params: {}", but for some reason
         * it didn't work, so i put the params directly in url, it's not fancy ): , but it works (:
         */
        const response = await axios.post(`${bling.url}pedido/json/apikey=${bling.apikey}&xml=${xmlData}`);

        return {success: true, data: response};
    } catch (error) {
        console.log(error);
        return {success: false, data: {}};
    }
}

module.exports = {
    sendOrder
}