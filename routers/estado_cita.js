import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';

let storageEstadoCita = Router();
dotenv.config();

let con = undefined;

storageEstadoCita.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

/* http://127.11.11.11:5010/estado_cita/ */
storageEstadoCita.get("/", (req, res)=>{
    con.query(
    /*sql*/`SELECT * FROM estado_cita`,
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

export default storageEstadoCita;