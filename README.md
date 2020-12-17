# pipebli.node
This is a node api that integrates Pipedrive api, Bling api and a mongoDB collection.

### Requirements
- [x] Criar contas testes nas plataformas Pipedrive e Bling.

- [x] Criar uma integração entre as plataformas Pipedrive e Bling. (A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).

- [x] Criar banco de dados mongo, existem serviços como MongoDB Atlas para criar de graça

- [x] Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.

- [x] Criar endpoint para trazer os dados consolidados da collection do MongoDB.

### How to use it

- First, install dependencies using ```npm install```;
- Make sure you have: 
    - a mongoDB connection;
    - a pipedrive api license;
        - some deals with status: won for tests 
    - a bling api license;
- For last, create a ```.env``` and put inside:
```.env
PORT=<Port api running>

MONGODB_URI=<MongoDB connection>

BLING_URL=https://bling.com.br/Api/v2/
BLING_APIKEY=<Your api key from pipedrive>

PIPEDRIVE_URL=https://among-sandbox.pipedrive.com/api/v1/
PIPEDRIVE_APIKEY=<Your api key from bling>
```

### Referencies
* Dependencies
    * [Axios](https://www.npmjs.com/package/axios)
    * [Body-Parser](https://www.npmjs.com/package/body-parser)
    * [Dotenv](https://www.npmjs.com/package/dotenv)
    * [Express](https://www.npmjs.com/package/express)
    * [Mongoose](https://www.npmjs.com/package/mongoose)
    * [Node-Cron](https://www.npmjs.com/package/node-cron)
* Documentation Services
    * [PipeDrive](https://developers.pipedrive.com/docs/api/v1/)
    * [Bling](https://ajuda.bling.com.br/hc/pt-br/categories/360002186394-API-para-Desenvolvedores)
    * [Mongoose](https://mongoosejs.com/docs/guide.html)

### Author
[chicofariasneto](https://github.com/chicofariasneto)
