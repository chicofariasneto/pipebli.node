/**
 * try to use console.log(require('dotenv'));
 * to see if you file is ok.
 * Or you can use { path: 'path .env' }
 */
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (request, response) => {
    response.json({
        Info: 'This is an api that creates an integration with Pipedrive and Bling and manages data using a mongodb',
        author: 'chicofariasneto',
        Documentation: 'soon',
        Port: `APP running on port ${port}.`
    });
});

require('./app/controller/index')(app);

app.listen(port, () => {
});