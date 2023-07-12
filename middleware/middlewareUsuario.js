import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { postUsuarios } from '../controller/usuario.js';

const postUsuario = (req, res, next) => {
    try {
        let data = plainToClass(postUsuarios, req.body, {excludeExtraneousValues: true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default postUsuario;