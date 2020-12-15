require('dotenv').config();
const axios = require('axios');

/**
 * Credentials of Pipedrive
 */
const pipedrive = {
    url: process.env.PIPEDRIVE_URL,
    apikey: process.env.PIPEDRIVE_APIKEY
}

/**
 * This function returns each deal that has status won on pipedrive.
 *
 * @returns {Promise<Array<Object>>}
 */
const dealsWon = async () => {
    try {
        const query = await axios.get(pipedrive.url + 'deals', {
            params: {
                status: 'won',
                api_token: pipedrive.apikey
            }
        });

        return query.data;
    } catch (error) {
        return [];
    }
}

dealsWon().then(console.log);