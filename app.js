import dotenv from 'dotenv';
import express from 'express';
import storageUsuario from './routers/usuario.js';
import storageCita from './routers/cita.js';
import storageTipoDocumento from './routers/tipo_documento.js';
import storageGenero from './routers/genero.js';
import storageAcudiente from './routers/acudiente.js';
import storageEstadoCita from './routers/estado_cita.js';
import storageMedico from './routers/medico.js';
import storageEspecialidad from './routers/especialidad.js';

dotenv.config();
let appExpress = express();

appExpress.use(express.json());
appExpress.use("/usuario", storageUsuario);
appExpress.use("/cita", storageCita);
appExpress.use("/tipo_documento", storageTipoDocumento);
appExpress.use("/genero", storageGenero);
appExpress.use("/acudiente", storageAcudiente);
appExpress.use("/estado_cita", storageEstadoCita);
appExpress.use("/medico", storageMedico);
appExpress.use("/especialidad", storageEspecialidad);

let config = JSON.parse(process.env.MY_CONFIG)
appExpress.listen(config, () => console.log(`http://${config.hostname}:${config.port}`))