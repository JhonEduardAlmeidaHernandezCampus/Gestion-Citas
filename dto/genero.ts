import { Expose, Type, Transform } from "class-transformer";

export class postGeneros{
    @Expose({name: "Genero"})
    @Transform(({value}) => {if(/^[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    gen_nombre: String;

    @Expose({name: "Abreviatura"})
    @Transform(({value}) => {if(/^[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    gen_abreviatura: String;

    constructor(gen_nombre:string, gen_abreviatura:string){
        this.gen_nombre = gen_nombre;
        this.gen_abreviatura = gen_abreviatura;
    }
}