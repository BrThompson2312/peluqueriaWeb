let promocionId = 1;

export class Promocion {
    constructor (nombre, descripcion, precio) {
        this.promocionId = promocionId;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        promocionId++;
    }
}