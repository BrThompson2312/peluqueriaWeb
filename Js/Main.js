import { Servicio } from './Clases/Servicio.js';
import { Barbero } from './Clases/Barbero.js';
import { Promocion } from './Clases/Promocion.js';

let $ = (e) => document.querySelector(e);
let barberos = [];
let servicios = [];
let promociones = [];

document.addEventListener("DOMContentLoaded", (event) => {
    precargaDatos();
    importar_data();

});

function renderizarPromocionesSection() {
    let contenedor = $('#promociones');
    contenedor.innerHTML = '';

    promociones = JSON.parse(localStorage.getItem("promociones")) || [];

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

    servicios = JSON.parse(localStorage.getItem("servicios")) || [];

    servicios.forEach(e => {
        debugger;
        const imagenSrc = e.imagen ? e.imagen : "Imgs/npc.jpg"; // Usa una imagen por defecto si falta
        contenedor.innerHTML += `
            <div class="box">
                <div>
                    <h3>${e.nombre}</h3>
                    <p>${e.descripcion}</p>
                    <p><strong>Duración estimada: ${e.duracion}</strong></p>
                    <p><strong>Precio: ${e.precio}</strong></p>
                </div>
                <img class="img-fluid" src=${imagenSrc}>
            </div>
        `;
    });
}

function renderizarServiciosSelect() {
    let contenedor = $("#slcServicios");
    contenedor.innerHTML = "";

    servicios = JSON.parse(localStorage.getItem("servicios")) || [];
    promociones = JSON.parse(localStorage.getItem("promociones")) || [];

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

    promociones.forEach(e => {
        let label = document.createElement("label");
        label.className = "opcion";
        label.textContent = e.nombre;
        
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "promociones[]";
        checkbox.value = e.promocionId;
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

    barberos = JSON.parse(localStorage.getItem("barberos")) || [];

    barberos.forEach(b => {
        contenedor.innerHTML += `
            <div class="box">
                <img class="bg-secondary d-block mb-3 mx-auto img-fluid" src="${b.foto}">
                <div class="text-start pb-5">
                    <h4>${b.nombre}</h4>
                    <p>${b.descripcion}</p>
                    <p>${b.puntaje}</p>
                </div>
            </div>
        `;
    });
}

function renderizarBarberosSelect() {
    let select = $('#slcBarberos');
    select.innerHTML = '';

    barberos = JSON.parse(localStorage.getItem("barberos")) || [];

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
    renderizarBarberosSelect();
}

function precargaDatos() {
    const barberos = [
        new Barbero("Imgs/npc.jpg", "nombre1", "desc1", 5),
        new Barbero("Imgs/npc.jpg", "nombre2", "desc2", 5),
        new Barbero("Imgs/npc.jpg", "nombre3", "desc3", 5),
        new Barbero("Imgs/npc.jpg", "nombre4", "desc4", 5),
    ];

    if (!localStorage.getItem("barberos")) {
        localStorage.setItem("barberos", JSON.stringify(barberos));
    }

    const servicios = [
        new Servicio("Corte de Pelo", "Corte clásico o moderno, adaptado al estilo y preferencias del cliente. Incluye lavado exprés y acabado con productos de styling.", 75, 600, "Imgs/cortepelo.jpg"),
        new Servicio("Perfilado y Afeitado de Barba", "Perfilado de barba con máquina y/o navaja, incluye vapor caliente, loción refrescante y toalla tibia.", 45, 450, "Imgs/perfiladobarba.jpg"),
        new Servicio("Coloración Capilar", "Aplicación de color para cubrir canas o dar un estilo personalizado. Incluye diagnóstico previo y productos sin amoníaco.", 15, 1000, "Imgs/coloracionpelo.jpg"),
        new Servicio("Manicura Masculina", "Corte y limado de uñas, tratamiento de cutículas, hidratación y pulido (sin esmalte). Ideal para imagen profesional o cuidado personal.", 30, 500, "Imgs/manicuramasculina.jpg"),
    ];    

    if (!localStorage.getItem("servicios")) {
        localStorage.setItem("servicios", JSON.stringify(servicios));
    }

    const promociones = [
        new Promocion("Pack “Renovate”", "Ideal para quienes buscan un cambio rápido y efectivo. Incluye corte y perfilado de barba para renovar tu imagen en una sola sesión.", 950),
        new Promocion("Pack “Imagen Completa”", "Combinamos corte, arreglo de barba y manicura para que salgas con un look pulido y profesional de pies a cabeza.", 1350),
        new Promocion("Color + Corte", "Perfecto si querés un cambio de look más audaz. Sumamos coloración al corte para que puedas expresarte con estilo y frescura.", 1400),
    ]

    if (!localStorage.getItem("promociones")) {
        localStorage.setItem("promociones", JSON.stringify(promociones));
    }
}


mapa();

function mapa(){
    var map = L.map('map').setView([-34.9011, -56.1645], 13); // Montevideo

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-34.9011, -56.1645]).addTo(map)
        .bindPopup('Estilo Clasico')
        .openPopup();

}
