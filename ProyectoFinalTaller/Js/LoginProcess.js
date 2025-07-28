document.addEventListener("DOMContentLoaded", (event) => {
    if (isLogged()) {
        const page = window.location.pathname;

        if (!page.endsWith("Admin.html")) {
            window.location.href = "Admin.html";
        }
    } else if (!isLogged() || isLogged() == null){
        const page = window.location.pathname;

        if (page.endsWith("Admin.html")) {
            window.location.href = "Index.html";
        }
    }
});

function isLogged() {
    return localStorage.getItem("logueado") === "true";
}