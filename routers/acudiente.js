import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';
import postAcudiente from '../middleware/middlewareAcudiente.js';

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

/*
    {
        "Cedula": 112,
        "Nombre": "Carmen Hernandez",
        "Telefono": "+57 12321312",
        "Direccion": "789 Calle 9"
    }
*/

storageAcudiente.post("/", postAcudiente, (req, res) => {

    const {acu_codigo, acu_nombreCompleto, acu_telefono, acu_direccion} = req.body

    con.query(
        `INSERT INTO acudiente (acu_codigo, acu_nombreCompleto, acu_telefono, acu_direccion) VALUES (?, ?, ?, ?)`,
        [acu_codigo, acu_nombreCompleto, acu_telefono, acu_direccion],

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al agregar al acudiente")
            } else {
                res.send("Acudiente agregado con exito")
            }
        }
    )
})

storageAcudiente.put("/:acu_codigo", postAcudiente, (req,res)=>{

    con.query(
        /*sql*/`UPDATE acudiente SET ? WHERE acu_codigo = ? `,
        [req.body, req.params.acu_codigo],

        (err, data, fil)=>{
            if (err) {
                res.status(500).send("Error al modificar el acudiente")
            }else{
                res.send("Modificado con exito")
            }
        }
    )
})

export default storageAcudiente;