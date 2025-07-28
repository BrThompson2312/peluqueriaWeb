class Barbero {
    constructor (foto, nombre, descripcion, puntaje) {
        this.foto = foto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.puntaje = puntaje;
        this.validar();
    }

    validar() {
        
    }
}

const barberos = [
    new Barbero("Imgs/npc.jpg", "nombre1", "desc1", 5),
    new Barbero("Imgs/npc.jpg", "nombre2", "desc2", 5),
    new Barbero("Imgs/npc.jpg", "nombre1", "desc3", 5),
    new Barbero("Imgs/npc.jpg", "nombre1", "desc4", 5),
]; 