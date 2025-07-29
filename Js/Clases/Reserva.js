import { servicios } from './Servicio.js';

export class Reserva {
  constructor(nombre, telefono, email, fecha, hora, serviciosSeleccionados = [], barbero = null) {
    this.nombre = nombre || "";
    this.telefono = telefono || "";
    this.email = email || "";
    this.fecha = fecha || "";
    this.hora = hora || "";
    this.serviciosSeleccionados = serviciosSeleccionados;
    this.barbero = barbero || null;
    this.duracion = calcularDuracion(serviciosSeleccionados);
  }

  setServicios(serviciosIds) {
    this.servicios = serviciosIds;
  }
}

export function calcularDuracion(serviciosSeleccionados) {
  let ret = 0;

  serviciosSeleccionados.forEach(idServicio => {
    const idNum = Number(idServicio);
    const servicioObj = servicios.find(s => s.servicioId === idNum);
    if (servicioObj) {
      ret += servicioObj.duracion;
    }
  });

  return ret;
} 