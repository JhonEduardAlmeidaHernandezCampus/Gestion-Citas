import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { postCitas } from '../controller/cita.js';

const postCita = (req, res, next) => {
    try {
        let data = plainToClass(postCitas, req.body, {excludeExtraneousValues: true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default postCita;