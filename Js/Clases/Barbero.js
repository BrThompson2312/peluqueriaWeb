let barberoId = 1;

export class Barbero {
    constructor (foto, nombre, descripcion, puntaje) {
        this.barberoId = barberoId;
        this.foto = foto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.puntaje = puntaje;
        barberoId++;
    }
}