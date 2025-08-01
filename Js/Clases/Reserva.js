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
  serviciosDisponibles = serviciosDisponibles || JSON.parse(localStorage.getItem("servicios")) || [];

  if (!Array.isArray(serviciosDisponibles) || serviciosDisponibles.length === 0) {
    console.warn("calcularDuracion: serviciosDisponibles vacío o inválido");
    return 0;
  }

  if (!Array.isArray(serviciosSeleccionados)) {
    console.warn("calcularDuracion: serviciosSeleccionados no es array", serviciosSeleccionados);
    return 0;
  }

  serviciosSeleccionados.forEach(idServicio => {
    const idNum = Number(idServicio);
    const servicioObj = serviciosDisponibles.find(s => s.servicioId === idNum);
    if (servicioObj) {
      ret += servicioObj.duracion;
    }
  });

  return ret;
}