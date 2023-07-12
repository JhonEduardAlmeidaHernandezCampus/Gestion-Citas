import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';

let storageAcudiente = Router();
dotenv.config();

let con = undefined;

storageAcudiente.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

/* http://127.10.10.10:5010/acudiente/ */
storageAcudiente.get("/", (req, res)=>{
    con.query(
    /*sql*/`SELECT * FROM acudiente`,
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

export default storageAcudiente;