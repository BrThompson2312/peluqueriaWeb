let $ = (e) => document.querySelector(e);

function importar_promociones() {
    promociones.forEach(e => {
        $("#promociones").innerHTML += `
            <div class="box d-flex flex-column justify-content-between">
                <h3>${e.nombre}</h3>
                <p>${e.descripcion}</p>
                <p><strong>Precio: $${e.precio}</strong></p>
            </div>
        `;
    })
}

function importar_servicios() {
    servicios.forEach(e => {
        $("#servicios").innerHTML += `
            <div class="box">
                <h3>${e.nombre}</h3>
                <div class="d-flex align-items-center justify-content-between gap-1">
                    <div class="info-corte d-flex align-items-center justify-content-between flex-column gap-1">
                        <p>${e.descripcion}</p>
                        <p><strong>Duracion estimada: ${e.duracion}</strong></p>
                        <p><strong>Precio: ${e.precio}</strong></p>
                    </div>
                    <img src="${e.imagen}">
                </div>
            </div>
        `;
    })
}

function importar_barberos() {
    barberos.forEach(e => {
        $("#barberos").innerHTML += `
            <div class="box d-flex align-items-start justify-content-start flex-column">
                <img class="bg-secondary d-block mb-3 mx-auto" src="${e.foto}">
                <div class="text-start pb-5">
                    <h4>${e.nombre}</h4>
                    <p>${e.descripcion}</p>
                    <p>${e.puntaje}</p>
                </div>
            </div>
        `;
    })
}

function importar_data() {
    importar_promociones();
    importar_servicios();
    importar_barberos();
}
importar_data();

localStorage.setItem("datos", JSON.stringify(reservas));