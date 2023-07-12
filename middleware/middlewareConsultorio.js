import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { postConsultorios } from '../controller/consultorio.js';

const postConsultorio = (req, res, next) => {
    try {
        let data = plainToClass(postConsultorios, req.body, {excludeExtraneousValues: true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default postConsultorio;