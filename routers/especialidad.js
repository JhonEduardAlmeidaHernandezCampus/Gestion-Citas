import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';

let storageEspecialidad = Router();
dotenv.config();

let con = undefined;

storageEspecialidad.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

/* http://127.11.11.11:5010/especialidad/ */
storageEspecialidad.get("/", (req, res)=>{
    con.query(
    /*sql*/`SELECT * FROM especialidad`,
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

export default storageEspecialidad;