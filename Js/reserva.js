import { Reserva } from "./Clases/Reserva.js";

export function crearReserva(formData, reservasExistentes = [], serviciosDisponibles = null) {
    const serviciosSeleccionados = formData.getAll('servicios[]');

    const reserva = new Reserva(
        formData.get("Nombre"),
        formData.get("Telefono"),
        formData.get("Email"),
        formData.get("Fecha"),
        formData.get("Hora"),
        serviciosSeleccionados,
        formData.get("barberos"),
        serviciosDisponibles
    );


    reservasExistentes.push(reserva);
    return reservasExistentes;
}