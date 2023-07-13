import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';
import postTipoDocumento from '../middleware/middlewareTipoDocumento.js';

let storageTipoDocumento = Router();
dotenv.config();

let con = undefined;

storageTipoDocumento.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

/* http://127.10.10.10:5010/tipo_documento/ */
storageTipoDocumento.get("/", (req, res)=>{
    con.query(
    /*sql*/`SELECT * FROM tipo_documento`,
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

/*
    {
        "Tipo_Documento": "Cedula de Extrangeria",
        "Abreviatura": "CE"
    }
*/

storageTipoDocumento.post("/", postTipoDocumento, (req, res) => {

    const {tipdoc_nombre, tipdoc_abreviatura} = req.body

    con.query(
        `INSERT INTO tipo_documento (tipdoc_nombre, tipdoc_abreviatura) VALUES (?, ?)`,
        [tipdoc_nombre, tipdoc_abreviatura],

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al agregar el tipo de documento")
            } else {
                res.send("Tipo de documento agregado con exito")
            }
        }
    )
})

storageTipoDocumento.put("/:tipdoc_id", postTipoDocumento, (req,res)=>{

    con.query(
        /*sql*/`UPDATE tipo_documento SET ? WHERE tipdoc_id = ?`,
        [req.body, req.params.tipdoc_id],

        (err, data, fil)=>{
            if (err) {
                res.status(500).send("Error al modificar el tipo de documento")
            }else{
                res.send("Modificado con exito")
            }
        }
    )
})

export default storageTipoDocumento;