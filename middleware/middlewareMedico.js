import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { postMedicos } from '../controller/medico.js';

const postMedico = (req, res, next) => {
    try {
        let data = plainToClass(postMedicos, req.body, {excludeExtraneousValues: true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default postMedico;