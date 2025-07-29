import {servicios} from './Clases/Servicio.js';

let $ = (e) => document.querySelector(e);

document.addEventListener("DOMContentLoaded", (event) => {
    importar_data();

});

function renderizarPromocionesSection(){
    let contenedor = $('#promociones');
    contenedor.innerHTML = '';

    promociones.forEach(p => {
        contenedor.innerHTML += `
            <div class="box">
                <div>
                    <h3>${p.nombre}</h3>
                    <p>${p.descripcion}</p>
                    <p><strong>Precio: ${p.precio}<strong></p>
                </div>
            </div>
        `;
    });
}

//Servicios

function renderizarServiciosSection() {
    let contenedor = $("#servicios");
    contenedor.innerHTML = "";

    servicios.forEach(e => {
        contenedor.innerHTML += `
            <div class="box">
                <div>
                    <h3>${e.nombre}</h3>
                    <p>${e.descripcion}</p>
                    <p><strong>Duración estimada: ${e.duracion}</strong></p>
                    <p><strong>Precio: ${e.precio}</strong></p>
                </div>
                <img src="${e.imagen}">
            </div>
        `;
    });
}

// function renderizarServiciosSelect() {
//     let select = $("#slcServicios");
//     select.innerHTML = "";

//     servicios.forEach(e => {
//         let option = document.createElement("option");
//         option.value = e.servicioId;
//         option.textContent = e.nombre;
//         select.appendChild(option);
//     });
// }

function renderizarServiciosSelect() {
    let contenedor = $("#slcServicios");
    contenedor.innerHTML = "";

    servicios.forEach(e => {
        let label = document.createElement("label");
        label.className = "opcion";
        label.textContent = e.nombre;

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "servicios[]";
        checkbox.value = e.servicioId;
        checkbox.hidden = true;

        label.appendChild(checkbox);
        contenedor.appendChild(label);

        label.addEventListener("click", function (event) {
            checkbox.checked = !checkbox.checked;
            label.classList.toggle("seleccionada", checkbox.checked);
            event.preventDefault();
        });
    });
}


//Barberos

function renderizarBarberosSection() {
    let contenedor = $("#barberos");
    contenedor.innerHTML = "";

    barberos.forEach(b => {
        contenedor.innerHTML += `
            <div class="box">
                <img class="bg-secondary d-block mb-3 mx-auto" src="${b.foto}">
                <div class="text-start pb-5">
                    <h4>${b.nombre}</h4>
                    <p>${b.descripcion}</p>
                    <p>${b.puntaje}</p>
                </div>
            </div>
        `;
    });
}

function rederizarBarberosSelect(){
    let select = $('#slcBarberos');
    select.innerHTML = '';

    barberos.forEach(b => {
        let option = document.createElement("option");
        option.value = b.barberoId;
        option.text = b.nombre;
        select.appendChild(option);
    });
}

function importar_data() {
    renderizarPromocionesSection();
    renderizarServiciosSection();
    renderizarServiciosSelect();
    renderizarBarberosSection();
    rederizarBarberosSelect();
}

// document.getElementById("formReserva").addEventListener("submit", function (e) {
//     e.preventDefault();
//     const data = new FormData(this);
//     console.log(data.getAll("servicios[]"));
// });