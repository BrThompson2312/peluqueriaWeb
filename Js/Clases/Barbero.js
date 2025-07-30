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
    new Barbero("Imgs/npc.jpg", "Nico González", "Barbero uruguayo que ha trabajado con numerosas figuras públicas, incluyendo a Marcelo Tinelli y Luis Suárez. ", 5),
    new Barbero("Imgs/npc.jpg", "Arod the Barber", "Barbero de Los Ángeles, California, conocido por su estilo exótico y por especializarse en cortes afro y colores fantasía", 5),
    new Barbero("Imgs/npc.jpg", "Martial Vivot:", "Barbero francés, considerado uno de los estilistas masculinos más solicitados a nivel mundial, según un artículo de Philips. ", 5),
    new Barbero("Imgs/npc.jpg", "Blind Barber:", "Barbería en Nueva York que atiende a una clientela famosa, incluyendo atletas, actores y comediantes. ", 5),
]; 