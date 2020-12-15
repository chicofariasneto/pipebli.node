/**
 * This a scheduled routine to extract "deals won" of Pipedrive platform
 * and send this data to Bling platform and manage in a mongoDB
 *
 * This scheduled run every
 */
const cron = require("node-cron");
module.exports = () => {
    cron.schedule('1-30 * * * * *', () => {
        // TODO add routine to extract data, send data to bling and save in mongoDB
        console.log('running a task between 1-30 seconds');
    }, {
        scheduled: true,
        timezone: "America/Sao_Paulo"
    });
}