import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { postGeneros } from '../controller/genero.js';

const postGenero = (req, res, next) => {
    try {
        let data = plainToClass(postGeneros, req.body, {excludeExtraneousValues: true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default postGenero;