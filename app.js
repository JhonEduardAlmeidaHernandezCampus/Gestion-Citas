import dotenv from 'dotenv';
import express from 'express';
import storageUsuario from './routers/usuario.js';

dotenv.config();
let appExpress = express();

appExpress.use(express.json());
appExpress.use("/usuario", storageUsuario);

let config = JSON.parse(process.env.MY_CONFIG)
appExpress.listen(config, () => console.log(`http://${config.hostname}:${config.port}`))