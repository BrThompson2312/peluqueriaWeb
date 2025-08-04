import { crearReserva } from "./crearReserva.js";

document.querySelector("#formReserva form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const reservasGuardadas = JSON.parse(localStorage.getItem("reservas")) || [];
    const resultado = crearReserva(formData, reservasGuardadas);

    if (!resultado.ok) {
        mostrarErroresReserva(resultado.errores);
        return;
    }

    localStorage.setItem("reservas", JSON.stringify(resultado.reservas));

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

function mostrarErroresReserva(errores) {
    const campos = ['Nombre', 'Telefono', 'Email', 'Fecha', 'Hora'];
    let esValido = true;

    for (const campo of campos) {
        const error = errores[campo];
        const selector = `[name='${campo}']`;
        if (!marcarInvalido(selector, !!error, error)) {
            esValido = false;
        }
    }

    const serviciosContenedor = document.querySelector("#slcServicios");
    const servicioError = serviciosContenedor?.nextElementSibling;
    if (errores.Servicios) {
        serviciosContenedor.classList.add("is-invalid");
        if (!servicioError || !servicioError.classList.contains("error-msg")) {
            serviciosContenedor.insertAdjacentHTML("afterend", `<div class="error-msg">${errores.Servicios}</div>`);
        }
        esValido = false;
    } else {
        serviciosContenedor.classList.remove("is-invalid");
        if (servicioError && servicioError.classList.contains("error-msg")) {
            servicioError.remove();
        }
    }

    if (!marcarInvalido("#slcBarberos", !!errores.Barbero, errores.Barbero)) {
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