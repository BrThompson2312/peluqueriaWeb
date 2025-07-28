

cargarBarberosAdmin();
function cargarBarberosAdmin(){
    var slcBarberos = document.querySelector("#filtroBarbero");
    barberos.forEach(e => {
        var option = `<option value="${e.nombre}">${e.nombre}</option>`;
        slcBarberos.innerHTML += option;
    })
}



document.querySelector("#btnFiltrar").addEventListener("click", filtrarReservas);
function filtrarReservas(){
    let $ = (e) => document.querySelector(e);
    var filtroBarbero = document.querySelector("#filtroBarbero").value;
    var filtroFecha = document.querySelector("#filtroFecha").value;


    if(filtroBarbero != "-1"  && filtroFecha != ""){
        $("#DivReservas").innerHTML = "";
        reservas.forEach(e => {
            if(filtroBarbero == e.barbero && filtroFecha == e.fecha){
                $("#DivReservas").innerHTML += `
                    <div class="card tamCard">
                        <div class="card-body">
                            <h5 class="card-title">Reserva</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${e.barbero}</h6>
                            <p>
                                Usuario: ${e.nombre}
                                Hora: ${e.hora}
                                Fecha: ${e.fecha}
                            </p>
                        </div>
                    </div>
                `;
            }
        })
    }else if(filtroBarbero == "-1" && filtroFecha != ""){
        $("#DivReservas").innerHTML = "";
        reservas.forEach(e => {
            if(filtroFecha == e.fecha){
                $("#DivReservas").innerHTML += `
                    <div class="card tamCard">
                        <div class="card-body">
                            <h5 class="card-title">Reserva</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${e.barbero}</h6>
                            <p>
                                Usuario: ${e.nombre}<br>
                                Hora: ${e.hora}<br>
                                Fecha: ${e.fecha}
                            </p>
                        </div>
                    </div>
                `;
            }
        })
    }else if(filtroBarbero != "-1" && filtroFecha == ""){
        $("#DivReservas").innerHTML = "";
        reservas.forEach(e => {
            if(filtroBarbero == e.barbero){
                $("#DivReservas").innerHTML += `
                    <div class="card tamCard">
                        <div class="card-body">
                            <h5 class="card-title">Reserva</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${e.barbero}</h6>
                            <p>
                                Usuario: ${e.nombre} <br>
                                Hora: ${e.hora} <br>
                                Fecha: ${e.fecha}
                            </p>
                        </div>
                    </div>
                `;
            }
        })
    }else{
        $("#DivReservas").innerHTML = "";
        reservas.forEach(e => {
            $("#DivReservas").innerHTML += `
               <div class="card tamCard">
                    <div class="card-body">
                        <h5 class="card-title">Reserva</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${e.barbero}</h6>
                        <p>
                            Usuario: ${e.nombre} <br>
                            Hora: ${e.hora}<br>
                            Fecha: ${e.fecha}
                        </p>
                    </div>
                </div>
            `;
        })
    }
}