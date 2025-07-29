let barberoId = 1;

class Barbero {
    constructor (foto, nombre, descripcion, puntaje) {
        this.barberoId = barberoId;
        this.foto = foto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.puntaje = puntaje;
        barberoId++;
    }
}

const barberos = [
    new Barbero("Imgs/npc.jpg", "nombre1", "desc1", 5),
    new Barbero("Imgs/npc.jpg", "nombre2", "desc2", 5),
    new Barbero("Imgs/npc.jpg", "nombre3", "desc3", 5),
    new Barbero("Imgs/npc.jpg", "nombre4", "desc4", 5),
]; 