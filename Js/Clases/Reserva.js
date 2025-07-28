class Reserva {
    constructor (nombre, telefono, email, fecha, hora, servicio) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.fecha = fecha;
        this.hora = hora;
        this.servicio = servicio;
        
        //this.servicio.push(servicio);
        this.validar();
    }

    validar() {
        
    }
}

const reservas = [
    new Reserva("Juan Pérez", "123456789", "juan@example.com", "2025-08-01", "10:00", "Corte de cabello"),
    new Reserva("Ana Gómez", "987654321", "ana@example.com", "2025-08-02", "12:30", "Barba"),
    new Reserva("Luis Torres", "555123456", "luis@example.com", "2025-08-03", "15:00", "Coloración"),
    new Reserva("María López", "444987654", "maria@example.com", "2025-08-04", "09:30", "Peinado"),
];