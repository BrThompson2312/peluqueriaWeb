let adminEmail = "juan@gmail.com";
let adminPass = "juan1234";
let logueado = false;

document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("logged") != null){
        alert("Ya esta logueado");
        window.location.href = "index.html";
    }
});

document.querySelector("#form-login").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = document.getElementById("form-login");

    let email = form.elements.txtEmail.value;
    let password = form.elements.txtPassword.value; 
    
    if(email != adminEmail || password != adminPass){
        const error = document.getElementById("error1");
        error.style.display = "block";

        setTimeout(() => {
            error.style.display = "none";
        }, 3000);
    } else if (email == adminEmail && password == adminPass) {
        const success = document.getElementById("success");
        success.style.display = "block";
        localStorage.setItem("logueado", true);        

        setTimeout(() => {
            success.style.display = "none";
        }, 3000);
    }

});