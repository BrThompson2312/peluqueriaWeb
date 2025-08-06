let adminEmail = "juan@gmail.com";
let adminPass = "juan1234";

export function Login(email, password) {
    if (email === "")
        return Error("Email no puede ser nulo");

    if(password === "")
        return Error("Contraseña no puede ser nula");

    if (email != adminEmail || password != adminPass)
        return Error("Credenciales invalidas");

    return;
}