let servicioId = 1;

export class Servicio {
    constructor (nombre, descripcion, duracion, precio, imagen) {
        this.servicioId = servicioId;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.duracion = duracion;
        this.unidadDuracion = unidadDuracion;
        this.precio = precio;
        this.imagen = imagen;
        servicioId++;
    }
}
