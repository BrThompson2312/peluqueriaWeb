document.getElementById("btnLogout").addEventListener("click", () => {
    if(confirm("¿Desea cerrar sesión?")){
        Logout();
    }
});

function Logout(){
    if(isLogged()){
        localStorage.setItem("logueado", "false");
        setTimeout( () => {
            window.location.href = "Index.html";
        }, 3000);
    }
}