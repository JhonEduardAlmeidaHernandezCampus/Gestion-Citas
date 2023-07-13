import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';

let storageConsultaCitas = Router();
dotenv.config();

let con = undefined;

storageConsultaCitas.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

/* http://127.11.11.11:5010/consultarCitas/ */
storageConsultaCitas.get("/", (req, res)=>{
    con.query(
    /*sql*/`SELECT * FROM cita ORDER BY cit_fecha DESC`,
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

/* http://127.10.10.10:5010/consultarCitas/proximaCita/13579 */
storageConsultaCitas.get("/proximaCita/:usu_id", (req, res)=>{
    con.query(
    /*sql*/`SELECT usu_id, usuario.usu_nombre, usuario.usu_primer_apellido_usuar, usuario.usu_telefono, cita.cit_fecha FROM usuario INNER JOIN cita ON usuario.usu_id = cita.cit_datosUsuario WHERE usu_id = ? ORDER BY cita.cit_fecha DESC`,
    [req.params.usu_id],
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

/* http://127.10.10.10:5010/consultarCitas/citaDia/2023-02-18 */
storageConsultaCitas.get("/citaDia/:cit_fecha", (req, res)=>{
    con.query(
    /*sql*/`SELECT * FROM cita WHERE cit_fecha = ?`,
    [req.params.cit_fecha],
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

export default storageConsultaCitas;