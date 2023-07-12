import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { postEspecialidades } from '../controller/especialidad.js';

const postEspecialidad = (req, res, next) => {
    try {
        let data = plainToClass(postEspecialidades, req.body, {excludeExtraneousValues: true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default postEspecialidad;