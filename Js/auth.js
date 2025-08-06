let adminEmail = "juan@gmail.com";
let adminPass = "juan1234";

export function Login(email, password) {
    if (email === "")
        return { error: true, msg: "Email no puede ser nulo" };

    if (password === "")
        return { error: true, msg: "Contraseña no puede ser nula" };

    if (email !== adminEmail || password !== adminPass)
        return { error: true, msg: "Credenciales invalidas" };

    return { error: false };
}
