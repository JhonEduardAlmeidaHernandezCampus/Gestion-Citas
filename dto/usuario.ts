import { Expose, Type, Transform } from "class-transformer";

export class postUsuarios{
    @Expose({name: "Documento"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    usu_id: number;
    
    @Expose({name: "Primer_Nombre"})
    @Transform(({value}) => {if(/^[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    usu_nombre: String;

    @Expose({name: "Segundo_Nombre"})
    @Transform(({value}) => {if(/^[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    usu_segdo_nombre: String;

    @Expose({name: "Primer_Apellido"})
    @Transform(({value}) => {if(/^[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    usu_primer_apellido_usuar: String;

    @Expose({name: "Segundo_Apellido"})
    @Transform(({value}) => {if(/^[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    usu_segdo_apellido_usuar: String;

    @Expose({name: "Edad"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros `};}, {toClassOnly: true})
    usu_edad: number;

    @Expose({name: "Telefono"})
    @Transform(({value}) => {if(/^[0-9\s\W]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    usu_telefono: String;

    @Expose({name: "Direccion"})
    @Transform(({value}) => {if(/^[a-zA-Z0-9\s\W]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    usu_direccion: String;

    @Expose({name: "Email"})
    @Transform(({value}) => { if(/\S+@\S+\.\S+/.test(value)) return value; else throw {status: 400, message: `Los datos no cumplen con los parametros de entrada`}}, {toClassOnly: true})    
    usu_email: String;

    @Expose({name: "Tipo_Documento"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    usu_tipodoc: number;

    @Expose({name: "Genero"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    usu_genero: number;

    @Expose({name: "Acudiente"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    usu_acudiente: number;

    constructor(usu_id:number, usu_nombre:string, usu_segdo_nombre:string, usu_primer_apellido_usuar:string, usu_segdo_apellido_usuar:string, usu_edad:number, usu_telefono:string, usu_direccion:string, usu_email:string, usu_tipodoc:number, usu_genero:number, usu_acudiente:number){
        this.usu_id = usu_id;
        this.usu_nombre = usu_nombre;
        this.usu_segdo_nombre = usu_segdo_nombre;
        this.usu_primer_apellido_usuar = usu_primer_apellido_usuar;
        this.usu_segdo_apellido_usuar = usu_segdo_apellido_usuar;
        this.usu_edad = usu_edad;
        this.usu_telefono = usu_telefono;
        this.usu_direccion = usu_direccion;
        this.usu_email = usu_email;
        this.usu_tipodoc = usu_tipodoc;
        this.usu_genero = usu_genero;
        this.usu_acudiente = usu_acudiente;
    }
}