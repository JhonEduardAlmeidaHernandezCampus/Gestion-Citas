import { Expose, Type, Transform } from "class-transformer";

export class postMedicos{
    @Expose({name: "Cedula"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    med_nroMatriculaProsional: number;

    @Expose({name: "Nombre"})
    @Transform(({value}) => {if(/^[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    med_nombreCompleto: String;

    @Expose({name: "Consultorio"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    med_consultorio: number;

    @Expose({name: "Especialidad"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    med_especialidad: number;

    constructor(med_nroMatriculaProsional:number, med_nombreCompleto:string, med_consultorio:number, med_especialidad:number){
        this.med_nroMatriculaProsional = med_nroMatriculaProsional;
        this.med_nombreCompleto = med_nombreCompleto;
        this.med_consultorio = med_consultorio;
        this.med_especialidad = med_especialidad;
    }
}