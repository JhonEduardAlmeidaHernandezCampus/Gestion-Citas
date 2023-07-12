import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';
import postGenero from '../middleware/middlewareGenero.js';

let storageGenero = Router();
dotenv.config();

let con = undefined;

storageGenero.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

/* http://127.10.10.10:5010/genero/ */
storageGenero.get("/", (req, res)=>{
    con.query(
    /*sql*/`SELECT * FROM genero`,
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

/*
    {
        "Estado": "Programada"
    }
*/

storageGenero.post("/", postGenero, (req, res) => {

    const {gen_nombre, gen_abreviatura} = req.body

    con.query(
        `INSERT INTO genero (gen_nombre, gen_abreviatura) VALUES (?, ?)`,
        [gen_nombre, gen_abreviatura],

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al agregar el genero")
            } else {
                res.send("Genero agregado con exito")
            }
        }
    )
})

export default storageGenero;