import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { postEstadoCitas } from '../controller/estado_cita.js';

const postEstadoCita = (req, res, next) => {
    try {
        let data = plainToClass(postEstadoCitas, req.body, {excludeExtraneousValues: true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default postEstadoCita;