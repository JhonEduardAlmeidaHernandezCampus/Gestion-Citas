import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';
import postEstadoCita from '../middleware/middlewareEstadoCita.js';

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

/*
    {
        "Estado": "Programada"
    }
*/

storageEstadoCita.post("/", postEstadoCita, (req, res) => {

    const {estcita_nombre} = req.body

    con.query(
        `INSERT INTO estado_cita (estcita_nombre) VALUES (?)`,
        [estcita_nombre],

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al agregar el estado")
            } else {
                res.send("Estado agregado con exito")
            }
        }
    )
})

export default storageEstadoCita;