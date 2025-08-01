let adminEmail = "juan@gmail.com";
let adminPass = "juan1234";

export function Login(email, password) {
    if (email != adminEmail || password != adminPass)
        throw new Error("Credenciales invalidas");

    return;
}