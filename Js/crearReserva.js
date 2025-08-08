import { calcularDuracion, Reserva } from "./Clases/Reserva.js";

export function crearReserva(formData, reservasExistentes = [], serviciosDisponibles = null) {
    serviciosDisponibles = serviciosDisponibles || JSON.parse(localStorage.getItem("servicios"));
    const errores = validarDatosReserva(formData, serviciosDisponibles, reservasExistentes);

    if (Object.keys(errores).length > 0) {
        return { ok: false, errores };
    }

    const serviciosSeleccionados = formData.getAll('servicios[]');

    const reserva = new Reserva(
        formData.get("Nombre"),
        formData.get("Telefono"),
        formData.get("Email"),
        formData.get("Fecha"),
        formData.get("Hora"),
        serviciosSeleccionados,
        formData.get("Barbero"),
        serviciosDisponibles
    );

    reservasExistentes.push(reserva);
    return {
        ok: true,
        reserva,
        reservas: reservasExistentes,
    };
}

function validarDatosReserva(formData, serviciosDisponibles = null, reservasExistentes = null) {
    const errores = {};

    const nombre = formData.get("Nombre")?.trim();
    if (!nombre || nombre.length < 2) {
        errores.Nombre = "Debe tener al menos 2 caracteres";
    }

    const telefono = formData.get("Telefono")?.trim();
    if (!/^\d{7,15}$/.test(telefono)) {
        errores.Telefono = "Teléfono inválido";
    }

    const email = formData.get("Email")?.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errores.Email = "Email inválido";
    }

    const fecha = formData.get("Fecha");
    if (!fecha) {
        errores.Fecha = "Seleccioná una fecha";
    }

    const hora = formData.get("Hora");
    if (!hora) {
        errores.Hora = "Seleccioná una hora";
    }

    const servicios = formData.getAll("servicios[]");
    if (!servicios || servicios.length === 0) {
        errores.Servicios = "Seleccioná al menos un servicio";
    }

    const barbero = formData.get("Barbero") || document.querySelector("#slcBarberos")?.value;
    if (!barbero) {
        errores.Barbero = "Seleccioná un barbero";
    }

    const duarcionServicios = calcularDuracion(servicios, serviciosDisponibles);

    if (fecha && hora && servicios?.length && barbero) {
        if (horarioOcupado(fecha, hora, duarcionServicios, barbero, reservasExistentes)) {
            errores.Hora = "Horario ocupado";
        }
    }

    return errores;
}

export function horarioOcupado(nuevaFecha, nuevaHora, nuevaDuracion, barberoId, reservasExistentes = null) {
    if (!Array.isArray(reservasExistentes)) {
        reservasExistentes = JSON.parse(localStorage.getItem("reservas")) || [];
    }

    const inicioNuevo = new Date(`${nuevaFecha}T${nuevaHora}`);
    const finNuevo = new Date(inicioNuevo.getTime() + nuevaDuracion * 60000);
    const serviciosDisponibles = JSON.parse(localStorage.getItem("servicios")) || [];

    for (const reserva of reservasExistentes) {
        const duracionReserva = reserva.duracion || calcularDuracion(reserva.servicios, serviciosDisponibles);
        const inicioRes = new Date(`${reserva.fecha}T${reserva.hora}`);
        const finRes = new Date(inicioRes.getTime() + duracionReserva * 60000);

        if (
            inicioNuevo < finRes &&
            finNuevo > inicioRes &&
            reserva.barbero === barberoId
        ) {
            return true;
        }
    }
    return false;
}
