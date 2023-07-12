var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class postAcudientes {
    constructor(acu_codigo, acu_nombreCompleto, acu_telefono, acu_direccion) {
        this.acu_codigo = acu_codigo;
        this.acu_nombreCompleto = acu_nombreCompleto;
        this.acu_telefono = acu_telefono;
        this.acu_direccion = acu_direccion;
    }
}
__decorate([
    Expose({ name: "Cedula" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], postAcudientes.prototype, "acu_codigo", void 0);
__decorate([
    Expose({ name: "Nombre" }),
    Transform(({ value }) => { if (/^[a-z-A-Z\s]+$/.test(value))
        return value;
    else
        throw { status: 400, message: "Error en los parametros" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], postAcudientes.prototype, "acu_nombreCompleto", void 0);
__decorate([
    Expose({ name: "Telefono" }),
    Transform(({ value }) => { if (/^[0-9\s\W]+$/.test(value))
        return value;
    else
        throw { status: 400, message: "Error en los parametros" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], postAcudientes.prototype, "acu_telefono", void 0);
__decorate([
    Expose({ name: "Direccion" }),
    Transform(({ value }) => { if (/^[a-zA-Z0-9\s\W]+$/.test(value))
        return value;
    else
        throw { status: 400, message: "Error en los parametros" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], postAcudientes.prototype, "acu_direccion", void 0);
