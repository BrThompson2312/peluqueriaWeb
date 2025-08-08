import { crearReserva } from "../Js/crearReserva";

describe('reserva test', () => {
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
        Barbero: "1",
      };
      return datos[campo];
    },
    getAll: (campo) => {
      if (campo === 'servicios[]') return [1, 3];
      return [];
    }
  };

  it('crea reserva correctamente', () => {
    const reservasIniciales = [];
    const respuesta = crearReserva(formData, reservasIniciales, serviciosDisponibles);

    console.log(respuesta);

    expect(respuesta.reservas.length).toBe(1);

    expect(respuesta.reservas[0].duracion).toBe(50);
  });

  it('crea reserva, barbero ocupado', () => {
    const badFormData = {
      get: (campo) => {
        const datos = {
          Nombre: "Juan",
          Telefono: "098123453",
          Email: "juan@gmail.com",
          Fecha: "2025-08-01",
          Hora: "10:20",
          Barbero: "1",
        };
        return datos[campo];
      },
      getAll: (campo) => {
        if (campo === 'servicios[]') return [1, 3];
        return [];
      }
    }

    const reservasIniciales = [];
    let respuesta = crearReserva(formData, reservasIniciales, serviciosDisponibles);

    expect(respuesta.reservas.length).toBe(1);

    respuesta = crearReserva(badFormData, reservasIniciales, serviciosDisponibles);

    console.log(respuesta);

    expect(respuesta.ok).toBeFalsy();
    expect(respuesta.errores).toHaveProperty("Hora", 'Horario ocupado');

  });

  it('crear reserva, email incorrecto', () => {
     const badEmailForm = {
      get: (campo) => {
        const datos = {
          Nombre: "Juan",
          Telefono: "098123453",
          Email: "juan@gmail",
          Fecha: "2025-08-01",
          Hora: "10:10",
          Barbero: "1",
        };
        return datos[campo];
      },
      getAll: (campo) => {
        if (campo === 'servicios[]') return [1, 3];
        return [];
      }
    }

    const reservasIniciales = [];

    let respuesta = crearReserva(badEmailForm, reservasIniciales, serviciosDisponibles);

    expect(respuesta.ok).toBeFalsy();
    expect(respuesta.errores).toHaveProperty("Email", 'Email inválido');
  })
});