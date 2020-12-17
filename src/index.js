/**
 * try to use console.log(require('dotenv'));
 * to see if you file is ok.
 * Or you can use { path: 'path .env' }
 */
require('dotenv').config();

/**
 * Running pipedrive's scheduled routine
 */
require('./app/service/cron.service')();

const mongoose = require('mongoose');

/**
 * Basic imports to start an api
 */
const express = require('express');
const bodyParser = require('body-parser');

/**
 * Mongodb connection
 */
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/**
 * initial setup
 */
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/**
 * EndPoints setup
 */
app.get('/', (request, response) => {
    response.json({
        Info: 'This is an api that creates an integration with Pipedrive and Bling and manages data using a mongodb',
        Author: 'chicofariasneto',
        Documentation: 'soon',
        Port: `APP running on port ${port}.`
    });
});
require('./app/controller/index')(app);

/**
 * Api's port
 */
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});