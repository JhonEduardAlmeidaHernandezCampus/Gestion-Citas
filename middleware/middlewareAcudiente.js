import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { postAcudientes } from '../controller/acudiente.js';

const postAcudiente = (req, res, next) => {
    try {
        let data = plainToClass(postAcudientes, req.body, {excludeExtraneousValues: true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default postAcudiente;