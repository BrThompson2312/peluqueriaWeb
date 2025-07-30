export class Reserva {
  constructor(nombre, telefono, email, fecha, hora, serviciosSeleccionados = [], barbero = null, serviciosDisponibles = null) {
    this.nombre = nombre || "";
    this.telefono = telefono || "";
    this.email = email || "";
    this.fecha = fecha || "";
    this.hora = hora || "";
    this.serviciosSeleccionados = serviciosSeleccionados;
    this.barbero = barbero || null;
    this.duracion = calcularDuracion(serviciosSeleccionados, serviciosDisponibles);
  }

  setServicios(serviciosIds, serviciosDisponibles = null) {
    this.serviciosSeleccionados = serviciosIds;
    this.duracion = calcularDuracion(serviciosIds, serviciosDisponibles);
  }
}

export function calcularDuracion(serviciosSeleccionados, serviciosDisponibles = null) {
  let ret = 0;
  const servicios = serviciosDisponibles || JSON.parse(localStorage.getItem("servicios"));

  serviciosSeleccionados.forEach(idServicio => {
    const idNum = Number(idServicio);
    const servicioObj = servicios.find(s => s.servicioId === idNum);
    if (servicioObj) {
      ret += servicioObj.duracion;
    }
  });

  return ret;
}
