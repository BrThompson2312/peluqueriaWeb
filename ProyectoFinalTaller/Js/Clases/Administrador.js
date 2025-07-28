class Administrador {
    constructor (email, contrasenia) {
        this.email = email;
        this.contrasenia = contrasenia;
        this.validar();
    }

    validar() {
        
    }
}

const administradores = [
    new Administrador("correo1", 1234),
];