class Reserva {
    constructor (nombre, telefono, email, fecha, hora, servicio) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.fecha = fecha;
        this.hora = hora;
        this.servicio.push(servicio);
        this.validar();
    }

    validar() {
        
    }
}

const reservas = [
    // new Barbero(null, "nombre1", "desc1", 5),
    // new Barbero(null, "nombre2", "desc2", 5),
    // new Barbero(null, "nombre1", "desc3", 5),
    // new Barbero(null, "nombre1", "desc4", 5),
];