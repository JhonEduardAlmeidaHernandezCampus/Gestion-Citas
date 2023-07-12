import { Expose, Type, Transform } from "class-transformer";

export class postAcudientes {
    @Expose({name: "Cedula"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    acu_codigo: number;

    @Expose({name: "Nombre"})
    @Transform(({value}) => {if(/^[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    acu_nombreCompleto: String;

    @Expose({name: "Telefono"})
    @Transform(({value}) => {if(/^[0-9\s\W]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    acu_telefono: String;
    
    @Expose({name: "Direccion"})
    @Transform(({value}) => {if(/^[a-zA-Z0-9\s\W]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    acu_direccion: String;

    constructor(acu_codigo:number, acu_nombreCompleto:string, acu_telefono:string, acu_direccion:string){
        this.acu_codigo = acu_codigo;
        this.acu_nombreCompleto = acu_nombreCompleto;
        this.acu_telefono = acu_telefono;
        this.acu_direccion = acu_direccion;
    }
}