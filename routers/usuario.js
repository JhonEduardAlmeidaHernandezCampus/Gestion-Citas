import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';
import postUsuario from '../middleware/middlewareUsuario.js';

let storageUsuario = Router();
dotenv.config();

let con = undefined;

storageUsuario.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

/* http://127.11.11.11:5010/usuario/ */
storageUsuario.get("/", (req, res)=>{
    con.query(
    /*sql*/`SELECT * FROM usuario ORDER BY usu_nombre DESC`,
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

/*
    {
        "Documento": 123123,
        "Primer_Nombre": "Sofia",
        "Segundo_Nombre": "Andrea",
        "Primer_Apellido": "Johnson",
        "Segundo_Apellido": "Sanchez",
        "Edad": 18,
        "Telefono": "+57 123213",
        "Direccion": "Calle 45",
        "Email": "Sofia@gmail.com",
        "Tipo_Documento": 1,
        "Genero": 1,
        "Acudiente": 12345
    }
*/

storageUsuario.post("/", postUsuario, (req, res) => {

    const {usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_edad, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente} = req.body

    con.query(
        `INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_edad, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_edad, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente],

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al agregar el usuario")
            } else {
                res.send("Usuario agregado con exito")
            }
        }
    )
})

export default storageUsuario;