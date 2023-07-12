import { Expose, Type, Transform } from "class-transformer";

export class postCitas {
    @Expose({name: "Fecha"})
    @Transform(({value}) => {if(/^[0-9\s\W]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    cit_fecha: String;

    @Expose({name: "Estado"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})

    cit_estadoCita: number;

    @Expose({name: "Medico"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    cit_medico: number;
    
    @Expose({name: "ID_Usuario"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    cit_datosUsuario: number;

    constructor(cit_fecha:string, cit_estadoCita:number, cit_medico:number, cit_datosUsuario:number){
        this.cit_fecha = cit_fecha;
        this.cit_estadoCita = cit_estadoCita;
        this.cit_medico = cit_medico;
        this.cit_datosUsuario = cit_datosUsuario;
    }
}