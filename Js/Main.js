let $ = (e) => document.querySelector(e);

function importar_promociones() {
    promociones.forEach(e => {
        $("#promociones").innerHTML += `
            <div class="box">
                <h3>${e.nombre}</h3>
                <p>${e.descripcion}</p>
                <p><strong>Precio: ${e.precio}<strong></p>
            </div>
        `;
    })
}

function importar_servicios() {
    servicios.forEach(e => {
        $("#servicios").innerHTML += `
            <div class="box">
                <div>
                    <h3>${e.nombre}</h3>
                    <p>${e.descripcion}</p>
                    <p><strong>Duracion estimada: ${e.duracion}<strong></p>
                    <p><strong>Precio: ${e.precio}<strong></p>
                </div>
                <img src="${e.imagen}">
            </div>
        `;
    })
}

function importar_barberos() {
    barberos.forEach(e => {
        $("#barberos").innerHTML += `
            <div class="box">
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

console.log(localStorage.getItem("datos"));