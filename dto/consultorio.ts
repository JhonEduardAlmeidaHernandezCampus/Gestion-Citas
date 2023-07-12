import { Expose, Type, Transform } from "class-transformer";

export class postConsultorios{
    @Expose({name: "Codigo"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    cons_codigo: number;

    @Expose({name: "Nombre"})
    @Transform(({value}) => {if(/^[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    cons_nombre: String;

    constructor(cons_codigo:number, cons_nombre:string){
        this.cons_codigo = cons_codigo;
        this.cons_nombre = cons_nombre;
    }
}