document.addEventListener("DOMContentLoaded", () => {
    const page = window.location.pathname.toLowerCase();

    if (isLogged()) {
        if (!page.includes("admin.html")) {
            window.location.href = "Admin.html";
        }
    } else {
        if (page.includes("admin.html")) {
            window.location.href = "Index.html";
        }
    }

    barberos = JSON.parse(localStorage.getItem("barberos")) || [];
    reservas = JSON.parse(localStorage.getItem("reservas")) || [];

    if(reservas == ""){
        const mensaje = document.querySelector("#message");
        mensaje.innerHTML = "No hay reservas";
        mensaje.style.display = "block";
    }

    cargarBarberosAdmin();
    filtrarReservas();
});

function cargarBarberosAdmin() {
    var slcBarberos = document.querySelector("#filtroBarbero");
    barberos.forEach(e => {
        var option = `<option value="${e.barberoId}">${e.nombre}</option>`;
        slcBarberos.innerHTML += option;
    })
}

document.querySelector("#btnFiltrar").addEventListener("click", filtrarReservas);

function filtrarReservas() {
    let $ = (e) => document.querySelector(e);
    var filtroBarbero = document.querySelector("#filtroBarbero").value;
    var filtroFecha = document.querySelector("#filtroFecha").value;
    let reservasFiltradas = reservas;

    if (filtroBarbero != "-1") {
        reservasFiltradas = reservasFiltradas.filter(r => r.barbero == filtroBarbero);
    }

    if (filtroFecha != "") {
        reservasFiltradas = reservasFiltradas.filter(r => r.fecha == filtroFecha);
    }

    $("#DivReservas").innerHTML = "";

    reservasFiltradas.forEach(e => {
        let barbero = barberos.find(b => b.barberoId == e.barbero);
        $("#DivReservas").innerHTML += `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
            <div class="card shadow rounded border-start border-4 border-danger h-100">
                <div class="card-body">
                    <h5 class="card-title">
                        <i class="bi bi-calendar-check-fill"></i> Reserva
                    </h5>
                    <h6 class="card-subtitle mb-3 text-muted">
                        <i class="bi bi-person-fill"></i>Barbero: ${barbero?.nombre || "Barbero desconocido"}
                    </h6>
                    <p class="mb-1"><strong><i class="bi bi-person-badge-fill"></i> Usuario:</strong> ${e.nombre}</p>
                    <p class="mb-1"><strong><i class="bi bi-clock-fill"></i> Hora:</strong> ${e.hora}</p>
                    <p class="mb-1"><strong><i class="bi bi-calendar-event-fill"></i> Fecha:</strong> ${e.fecha}</p>
                    <p><strong><i class="bi bi-hourglass-split"></i> Duración:</strong> ${e.duracion} minutos</p>
                </div>
            </div>
        </div>
    `;
    });

}

function isLogged() {
    return localStorage.getItem("logueado") === "true";
}