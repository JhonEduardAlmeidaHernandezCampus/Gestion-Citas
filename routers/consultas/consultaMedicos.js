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

/* http://127.10.10.10:5010/consultarMedicos/consultoriosMedicos/ */
storageConsultaMedicos.get("/consultoriosMedicos/", (req, res)=>{
    con.query(
    /sql/`SELECT medico.med_nroMatriculaProsional, medico.med_nombreCompleto, consultorio.cons_nombre FROM medico INNER JOIN consultorio ON medico.med_consultorio = consultorio.cons_codigo`,
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

/* http://127.10.10.10:5010/consultarMedicos/Medico/13579/Fecha/2023-02-18 */
storageConsultaMedicos.get("/Medico/:med_nroMatriculaProsional/Fecha/:cit_fecha", (req, res)=>{
    con.query(
    /*sql*/`SELECT cita.cit_fecha, COUNT(cita.cit_codigo) AS Cantidad_Citas, medico.med_nroMatriculaProsional, medico.med_nombreCompleto FROM cita INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional WHERE med_nroMatriculaProsional = ? AND cit_fecha = ? GROUP BY cita.cit_fecha, medico.med_nroMatriculaProsional, medico.med_nombreCompleto`,
    [req.params.med_nroMatriculaProsional, req.params.cit_fecha],
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

export default storageConsultaMedicos;