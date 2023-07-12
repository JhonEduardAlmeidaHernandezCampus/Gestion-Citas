import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';

let storageConsultorio = Router();
dotenv.config();

let con = undefined;

storageConsultorio.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

/* http://127.11.11.11:5010/consultorio/ */
storageConsultorio.get("/", (req, res)=>{
    con.query(
    /*sql*/`SELECT * FROM consultorio`,
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

export default storageConsultorio;