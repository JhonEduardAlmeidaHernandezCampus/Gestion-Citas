import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';
import postCita from '../middleware/middlewareCita.js';

let storageCita = Router();
dotenv.config();

let con = undefined;

storageCita.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

/* http://127.11.11.11:5010/cita/ */
storageCita.get("/", (req, res)=>{
    con.query(
    /*sql*/`SELECT * FROM cita ORDER BY cit_fecha DESC`,
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

/*
    {
        "Cedula": 112,
        "Nombre": "Carmen Hernandez",
        "Telefono": "+57 12321312",
        "Direccion": "789 Calle 9"
    }
*/

storageCita.post("/", postCita, (req, res) => {

    const {cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario} = req.body

    con.query(
        `INSERT INTO cita (cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES (?, ?, ?, ?)`,
        [cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario],

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al agregar la cita")
            } else {
                res.send("Cita agregada con exito")
            }
        }
    )
})

export default storageCita;