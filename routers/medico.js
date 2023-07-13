import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';
import postMedico from '../middleware/middlewareMedico.js';

let storageMedico = Router();
dotenv.config();

let con = undefined;

storageMedico.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

/* http://127.11.11.11:5010/medico/ */
storageMedico.get("/", (req, res)=>{
    con.query(
    /*sql*/`SELECT * FROM medico`,
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

/*
    {
        "Cedula": 12312,
        "Nombre": "A",
        "Consultorio": 1,
        "Especialidad": 1
    }
*/

storageMedico.post("/", postMedico, (req, res) => {

    const {med_nroMatriculaProsional, med_nombreCompleto, med_consultorio, med_especialidad} = req.body

    con.query(
        `INSERT INTO medico (med_nroMatriculaProsional, med_nombreCompleto, med_consultorio, med_especialidad) VALUES (?, ?, ?, ?)`,
        [med_nroMatriculaProsional, med_nombreCompleto, med_consultorio, med_especialidad],

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al agregar el medico")
            } else {
                res.send("Medico agregado con exito")
            }
        }
    )
})

storageMedico.put("/:med_nroMatriculaProsional", postMedico, (req,res)=>{

    con.query(
        /*sql*/`UPDATE medico SET ? WHERE med_nroMatriculaProsional = ?`,
        [req.body, req.params.med_nroMatriculaProsional],

        (err, data, fil)=>{
            if (err) {
                res.status(500).send("Error al modificar el medico")
            }else{
                res.send("Modificado con exito")
            }
        }
    )
})

export default storageMedico;