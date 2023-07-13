import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';

let storageConsultaUsu = Router();
dotenv.config();

let con = undefined;

storageConsultaUsu.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

/* http://127.11.11.11:5010/consultarUsuario/ */
storageConsultaUsu.get("/", (req, res)=>{
    con.query(
    /*sql*/`SELECT * FROM usuario ORDER BY usu_nombre DESC`,
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

/* http://127.10.10.10:5010/consultarUsuario/medicoEspecifico/13579 */
storageConsultaUsu.get("/medicoEspecifico/:med_nroMatriculaProsional", (req, res)=>{
    con.query(
    /*sql*/`SELECT usu_id, usu_nombre, usu_primer_apellido_usuar, cit_fecha, med_nroMatriculaProsional, med_nombreCompleto FROM usuario INNER JOIN cita ON usuario.usu_id = cita.cit_datosUsuario INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional WHERE med_nroMatriculaProsional = ?`,
    [req.params.med_nroMatriculaProsional],
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

export default storageConsultaUsu;