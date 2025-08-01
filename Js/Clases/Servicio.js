<<<<<<< HEAD
let servicioId = 1;

export class Servicio {
    constructor (nombre, descripcion, duracion, precio, imagen) {
        this.servicioId = servicioId;
=======
class Servicio {
    constructor (nombre, descripcion, duracion, unidadDuracion, precio, imagen) {
>>>>>>> pageUsuario
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.duracion = duracion;
        this.unidadDuracion = unidadDuracion;
        this.precio = precio;
        this.imagen = imagen;
        servicioId++;
    }
<<<<<<< HEAD
}
=======

    validar() {
        
    }
}

const servicios = [
    new Servicio("Corte de Pelo", "Corte clásico o moderno, adaptado al estilo y preferencias del cliente. Incluye lavado exprés y acabado con productos de styling.", 30, "min", 600, "Imgs/cortedepelo.jpg"),    
    new Servicio("Perfilado y Afeitado de Barba", "Perfilado de barba con máquina y/o navaja, incluye vapor caliente, loción refrescante y toalla tibia.", 30, "min", 450, "Imgs/cortedepelo.jpg"),  
    new Servicio("Coloración Capilar", "Aplicación de color para cubrir canas o dar un estilo personalizado. Incluye diagnóstico previo y productos sin amoníaco.", 30, "min", 1000, "Imgs/cortedepelo.jpg"),  
    new Servicio("Manicura Masculina", "Corte y limado de uñas, tratamiento de cutículas, hidratación y pulido (sin esmalte). Ideal para imagen profesional o cuidado personal.", 30, "min", 500, "Imgs/cortedepelo.jpg"), 
];
>>>>>>> pageUsuario
