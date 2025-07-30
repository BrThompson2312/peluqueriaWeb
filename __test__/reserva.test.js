import { crearReserva } from "../Js/reserva";

describe('reserva test', () => {
  it('crea reserva correctamente', () => {
    const serviciosDisponibles = [
      { servicioId: 1, nombre: "Corte", duracion: 30 },
      { servicioId: 3, nombre: "Barba", duracion: 20 }
    ];

    const formData = {
      get: (campo) => {
        const datos = {
          Nombre: "Sebastián",
          Telefono: "098123456",
          Email: "sebastian@mail.com",
          Fecha: "2025-08-01",
          Hora: "10:00",
          slcBarberos: "1",
        };
        return datos[campo];
      },
      getAll: (campo) => {
        if (campo === 'servicios[]') return [1, 3];
        return [];
      }
    };

    const reservasIniciales = [];
    const reservas = crearReserva(formData, reservasIniciales, serviciosDisponibles);

    expect(reservas.length).toBe(1);

    expect(reservas[0].duracion).toBe(50);
  });
});
