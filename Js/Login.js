import { Login } from "./auth.js";

let errorTimeout;

document.addEventListener("DOMContentLoaded", () => {
    if (isLogged()) {
        alert("Ya esta logueado");
        window.location.href = "Index.html";
    }
});

document.querySelector("#form-login").addEventListener("submit", function (event) {
    event.preventDefault();
    clearTimeout(errorTimeout);
    const form = document.getElementById("form-login");

    let email = form.elements.txtEmail.value;
    let password = form.elements.txtPassword.value;

    const message = Login(email, password);
    const success = document.getElementById("success");

    if (message) {
        const error = document.getElementById("error1");
        error.innerHTML = message.message;
        error.style.display = "block";

        errorTimeout = setTimeout(() => {
            error.style.display = "none";
            error.innerText = "";
        }, 3000);
    } else {
        success.style.display = "block";
        success.innerHTML = message;
        localStorage.setItem("logueado", "true");
        window.location.href = "Admin.html";

        setTimeout(() => {
            success.style.display = "none";
        }, 3000);
    }
});