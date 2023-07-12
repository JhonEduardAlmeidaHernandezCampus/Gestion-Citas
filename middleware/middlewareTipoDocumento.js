import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { postTipoDocumentos } from '../controller/tipo_documento.js';

const postTipoDocumento = (req, res, next) => {
    try {
        let data = plainToClass(postTipoDocumentos, req.body, {excludeExtraneousValues: true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default postTipoDocumento;