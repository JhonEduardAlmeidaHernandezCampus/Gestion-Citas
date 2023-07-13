import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';

let storageConsultaConsultorias = Router();
dotenv.config();

let con = undefined;

storageConsultaConsultorias.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

/* http://127.10.10.10:5010/consultarConsultorias/consultorias/13579 */
storageConsultaConsultorias.get("/consultorias/:usu_id", (req, res)=>{
    con.query(
    /*sql*/`SELECT usu_id, usuario.usu_nombre, usuario.usu_primer_apellido_usuar, usuario.usu_telefono, consultorio.cons_nombre FROM usuario INNER JOIN cita ON usuario.usu_id = cita.cit_datosUsuario INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional INNER JOIN consultorio ON medico.med_consultorio = consultorio.cons_codigo WHERE usu_id = ?`,
    [req.params.usu_id],
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

/* http://127.10.10.10:5010/consultarConsultorias/consultorios/13579 */
storageConsultaConsultorias.get("/consultorios/:usu_id", (req, res)=>{
    con.query(
    /*sql*/`SELECT usu_id, usuario.usu_nombre, usuario.usu_primer_apellido_usuar, cita.cit_fecha, medico.med_nombreCompleto, consultorio.cons_nombre FROM usuario INNER JOIN cita ON usuario.usu_id = cita.cit_datosUsuario INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional INNER JOIN consultorio ON medico.med_consultorio = consultorio.cons_codigo WHERE usu_id = ?`,
    [req.params.usu_id],
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

export default storageConsultaConsultorias;