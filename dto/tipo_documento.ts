import { Expose, Type, Transform } from "class-transformer";

export class postTipoDocumentos{
    @Expose({name: "Tipo_Documento"})
    @Transform(({value}) => {if(/^[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    tipdoc_nombre: String;

    @Expose({name: "Abreviatura"})
    @Transform(({value}) => {if(/^[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    tipdoc_abreviatura: String;

    constructor(tipdoc_nombre:string, tipdoc_abreviatura:string){
        this.tipdoc_nombre = tipdoc_nombre;
        this.tipdoc_abreviatura = tipdoc_abreviatura;
    }
}