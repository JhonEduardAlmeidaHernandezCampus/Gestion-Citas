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

export default storageConsultaUsu;