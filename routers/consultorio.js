import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';
import postConsultorio from '../middleware/middlewareConsultorio.js'

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

/*
    {
        "Codigo": 6,
        "Nombre": "Consultorio"
    }
*/

storageConsultorio.post("/", postConsultorio, (req, res) => {

    const {cons_codigo, cons_nombre} = req.body

    con.query(
        `INSERT INTO consultorio (cons_codigo, cons_nombre) VALUES (?, ?)`,
        [cons_codigo, cons_nombre],

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al agregar el consultorio")
            } else {
                res.send("Consultorio agregado con exito")
            }
        }
    )
})

storageConsultorio.put("/:cons_codigo", postConsultorio, (req,res)=>{

    con.query(
        /*sql*/`UPDATE consultorio SET ? WHERE cons_codigo = ?`,
        [req.body, req.params.cons_codigo],

        (err, data, fil)=>{
            if (err) {
                res.status(500).send("Error al modificar el consultorio")
            }else{
                res.send("Modificado con exito")
            }
        }
    )
})

export default storageConsultorio;