let administradores = [
    new Barbero("correo1", 1234),
];

let barberos = [
    new Barbero("correo1", 1234),
    new Barbero("correo1", 1234),
    new Barbero("correo1", 1234),
    new Barbero("correo1", 1234),
]; 

let reservas = [
    new Barbero(null, "nombre1", "desc1", 5),
    new Barbero(null, "nombre2", "desc2", 5),
    new Barbero(null, "nombre1", "desc3", 5),
    new Barbero(null, "nombre1", "desc4", 5),
]; 

localStorage.setItem("datos", JSON.stringify(reservas));

console.log(localStorage.getItem("datos"));