import { Login } from "../Js/auth.js";

describe('Login function', () => {

    test('devuelve true', () => {
        expect(Login("juan@gmail.com", "juan1234")).toBe();
    });

    test('lanza error con credenciales invalidas', () => {
        expect(() => Login('otro@mail.com', 'pass')).toThrow('Credenciales invalidas');
    });
});