import {Reserva} from './Clases/Reserva.js';

import { calcularDuracion } from './Clases/Reserva.js';

document.querySelector("#formReserva").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this); 

    if (!validarFormularioReserva(formData)) return;

    const serviciosSeleccionados = formData.getAll('servicios[]');
    const slcBarbero = document.querySelector("#slcBarberos");
    const barberoSeleccionado = slcBarbero.value;

    const reserva = new Reserva(
        formData.get("Nombre"),
        formData.get("Telefono"),
        formData.get("Email"),
        formData.get("Fecha"),
        formData.get("Hora"),
        serviciosSeleccionados,
        barberoSeleccionado
    );

    let reservasGuardadas = JSON.parse(localStorage.getItem("reservas"));

    if (!Array.isArray(reservasGuardadas)) {
        reservasGuardadas = [];
    }
    reservasGuardadas.push(reserva);
    localStorage.setItem("reservas", JSON.stringify(reservasGuardadas));


    const exito = document.querySelector("#mensaje-exito");
    exito.textContent = "¡Reserva realizada correctamente!";
    exito.style.display = "block";

    limpiarFormularioReserva();
    setTimeout(() => {
        exito.style.display = "none";
    }, 3000);
});

function marcarInvalido(selector, condicion, mensaje = "") {
    const campo = document.querySelector(selector);
    if (!campo) return false;

    let siguiente = campo.nextElementSibling;
    const yaExiste = siguiente?.classList.contains("error-msg");

    if (condicion) {
        campo.classList.add("is-invalid");

        if (!yaExiste) {
            const errorHTML = `<div class="error-msg">${mensaje}</div>`;
            campo.insertAdjacentHTML("afterend", errorHTML);
        } else {
            siguiente.textContent = mensaje;
        }

        return false;
    } else {
        campo.classList.remove("is-invalid");
        if (yaExiste) siguiente.remove();
        return true;
    }
}



function validarFormularioReserva(formData) {
    let esValido = true;

    const nombre = formData.get("Nombre")?.trim();
    if (!marcarInvalido("[name='Nombre']", !nombre || nombre.length < 2, "Debe tener al menos 2 caracteres"))
        esValido = false;

    const telefono = formData.get("Telefono")?.trim();
    if (!marcarInvalido("[name='Telefono']", !/^\d{7,15}$/.test(telefono), "Teléfono inválido"))
        esValido = false;

    const email = formData.get("Email")?.trim();
    if (!marcarInvalido("[name='Email']", !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), "Email inválido"))
        esValido = false;

    const fecha = formData.get("Fecha");
    if (!marcarInvalido("[name='Fecha']", !fecha, "Seleccioná una fecha"))
        esValido = false;

    const hora = formData.get("Hora");
    if (!marcarInvalido("[name='Hora']", !hora, "Seleccioná una hora"))
        esValido = false;

    const servicios = formData.getAll("servicios[]");
    const serviciosContenedor = document.querySelector("#slcServicios");

    const servicioError = serviciosContenedor?.nextElementSibling;
    if (!servicios || servicios.length === 0) {
        serviciosContenedor.classList.add("is-invalid");
        if (!servicioError || !servicioError.classList.contains("error-msg")) {
            serviciosContenedor.insertAdjacentHTML("afterend", `<div class="error-msg">Seleccioná al menos un servicio</div>`);
        }
        esValido = false;
    } else {
        serviciosContenedor.classList.remove("is-invalid");
        if (servicioError && servicioError.classList.contains("error-msg")) {
            servicioError.remove();
        }
    }

    const barbero = document.querySelector("#slcBarberos").value;
    if (!marcarInvalido("#slcBarberos", !barbero, "Seleccioná un barbero"))
        esValido = false;

    if(!marcarInvalido("[name='Hora']", horarioOcupado(fecha, hora, calcularDuracion(servicios), barbero), "Horario ocupado")){
        esValido = false;
    }

    return esValido;
}

function limpiarFormularioReserva() {
    const formulario = document.querySelector("#formReserva");
    formulario.reset();

    formulario.querySelectorAll(".is-invalid").forEach(campo => campo.classList.remove("is-invalid"));
    formulario.querySelectorAll(".error-msg").forEach(msg => msg.remove());
}

function horarioOcupado(nuevaFecha, nuevaHora, nuevaDuracion, barberoId) {
  const reservasExistentes = JSON.parse(localStorage.getItem("reservas"));
  const inicioNuevo = new Date(`${nuevaFecha}T${nuevaHora}`);
  const finNuevo = new Date(inicioNuevo.getTime() + nuevaDuracion * 60000);

  for (const reserva of reservasExistentes) {
    const inicioRes = new Date(`${reserva.fecha}T${reserva.hora}`);
    const finRes = new Date(inicioRes.getTime() + reserva.duracion * 60000);

    if (inicioNuevo < finRes && finNuevo > inicioRes && reserva.barbero == barberoId) {
      return true; 
    }
  }
  return false;
}
