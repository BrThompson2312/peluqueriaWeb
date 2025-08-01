
let barberos = [
  { nombre: "Carlos" },
  { nombre: "Luis" },
  { nombre: "Martín" }
];


cargarBarberosAdmin();
function cargarBarberosAdmin(){
    var slcBarberos = document.querySelector("#filtroBarbero");
    for (let i = 0; i < barberos.length; i++) {        
        const element = barberos[i];
        var option = `<option value="${element.nombre}">${element.nombre}</option>`;
        slcBarberos.innerHTML += option;
    }
}

document.querySelector("#btnFiltrar").addEventListener("click", filtrarReservas);
function filtrarReservas(){
    
    var espacioReservas = document.querySelector("#DivReservas");

    var filtroBarbero = document.querySelector("#filtroBarbero").value;
    var filtroFecha = document.querySelector("#filtroFecha").value;


    if(filtroBarbero != "-1"  && filtroFecha != ""){
        for (let i = 0; i < reservas.length; i++) {
            const element = reservas[i];

            if(filtroBarbero == element.barbero && filtroFecha == element.fecha){
                var card = `
                <div class="card tamCard">
                    <div class="card-body">
                        <h5 class="card-title">Reserva</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${element.barbero}</h6>
                        <p>
                            Usuario: ${element.name}
                            Hora: ${element.hora}
                            Fecha: ${element.fecha}
                        </p>
                    </div>`
                espacioReservas.innerHTML += card;
            }
        }
    }else if(filtroBarbero == "-1" && filtroFecha != ""){
        for (let i = 0; i < reservas.length; i++) {
            const element = reservas[i];
            if(filtroFecha == element.fecha){
                var card = `
                <div class="card tamCard">
                    <div class="card-body">
                        <h5 class="card-title">Reserva</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${element.barbero}</h6>
                        <p>
                            Usuario: ${element.name}
                            Hora: ${element.hora}
                            Fecha: ${element.fecha}
                        </p>
                    </div> `
                espacioReservas.innerHTML += card;
            }
        }
    }else if(filtroBarbero != "-1" && filtroFecha == ""){
        for (let i = 0; i < reservas.length; i++) {
            const element = reservas[i];
            if(element.barbero == filtroBarbero){
                var card = `
               <div class="card tamCard">
                <div class="card-body">
                    <h5 class="card-title">Reserva</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${element.barbero}</h6>
                    <p>
                        Usuario: ${element.name}
                        Hora: ${element.hora}
                        Fecha: ${element.fecha}
                    </p>
                </div> `
                espacioReservas.innerHTML += card;
            }
        }
    }else{
        for (let i = 0; i < reservas.length; i++) {
            const element = reservas[i];
            var card = `
              <div class="card tamCard">
                <div class="card-body">
                    <h5 class="card-title">Reserva</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${element.barbero}</h6>
                    <p>
                        Usuario: ${element.name}
                        Hora: ${element.hora}
                        Fecha: ${element.fecha}
                    </p>
                </div> `
            espacioReservas.innerHTML += card;
        }
    }
}