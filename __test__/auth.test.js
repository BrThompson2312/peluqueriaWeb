import { Login } from "../Js/auth.js";

describe('Login function', () => {

    test('devuelve { error: false } con credenciales válidas', () => {
        expect(Login("juan@gmail.com", "juan1234")).toEqual({ error: false });
    });

    test('devuelve error con credenciales inválidas', () => {
        expect(Login('otro@mail.com', 'pass')).toEqual({
            error: true,
            msg: 'Credenciales invalidas'
        });
    });

    test('devuelve error si el email está vacío', () => {
        expect(Login('', 'juan1234')).toEqual({
            error: true,
            msg: 'Email no puede ser nulo'
        });
    });

    test('devuelve error si la contraseña está vacía', () => {
        expect(Login('juan@gmail.com', '')).toEqual({
            error: true,
            msg: 'Contraseña no puede ser nula'
        });
    });

});
