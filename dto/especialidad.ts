import { Expose, Type, Transform } from "class-transformer";

export class postEspecialidades{
    @Expose({name: "Especialidad"})
    @Transform(({value}) => {if(/^[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    esp_nombre: String;

    constructor(esp_nombre:string){
        this.esp_nombre = esp_nombre;
    }
}