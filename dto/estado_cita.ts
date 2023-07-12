import { Expose, Type, Transform } from "class-transformer";

export class postEstadoCitas{
    @Expose({name: "Estado"})
    @Transform(({value}) => {if(/^[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    estcita_nombre: String;

    constructor(estcita_nombre:string){
        this.estcita_nombre = estcita_nombre;
    }
}