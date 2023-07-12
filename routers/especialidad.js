import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';
import postEspecialidad from '../middleware/middlewareEspecialidad.js';

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

/*
    {
        "Especialidad": "Medico Veterinario"
    }
*/

storageEspecialidad.post("/", postEspecialidad, (req, res) => {

    const {esp_nombre} = req.body

    con.query(
        `INSERT INTO especialidad (esp_nombre) VALUES (?)`,
        [esp_nombre],

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al agregar la especialidad")
            } else {
                res.send("Especialidad agregada con exito")
            }
        }
    )
})

export default storageEspecialidad;