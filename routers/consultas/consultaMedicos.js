import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';

let storageConsultaMedicos = Router();
dotenv.config();

let con = undefined;

storageConsultaMedicos.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

/* http://127.10.10.10:5010/consultarMedicos/especialidad/1 */
storageConsultaMedicos.get("/especialidad/:esp_id", (req, res)=>{
    con.query(
    /*sql*/`SELECT med_nroMatriculaProsional, med_nombreCompleto, med_especialidad, esp_nombre FROM medico INNER JOIN especialidad ON medico.med_especialidad = especialidad.esp_id WHERE esp_id = ?`,
    [req.params.esp_id],
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

export default storageConsultaMedicos;