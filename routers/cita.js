import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';

let storageCita = Router();
dotenv.config();

let con = undefined;

storageCita.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

/* http://127.11.11.11:5010/usuario/ */
storageCita.get("/", (req, res)=>{
    con.query(
    /*sql*/`SELECT * FROM cita ORDER BY cit_fecha DESC`,
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

export default storageCita;