class Servicio {
    constructor (nombre, descripcion, duracion, precio, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.duracion = duracion;
        this.precio = precio;
        this.imagen = imagen;
        this.validar();
    }

    validar() {
        
    }
}

const servicios = [
    new Servicio("Corte de Pelo", "Corte clásico o moderno, adaptado al estilo y preferencias del cliente. Incluye lavado exprés y acabado con productos de styling.", 30, 600, null),    
    new Servicio("Perfilado y Afeitado de Barba", "Perfilado de barba con máquina y/o navaja, incluye vapor caliente, loción refrescante y toalla tibia.", 30, 450, null),  
    new Servicio("Coloración Capilar", "Aplicación de color para cubrir canas o dar un estilo personalizado. Incluye diagnóstico previo y productos sin amoníaco.", 30, 1000, null),  
    new Servicio("Manicura Masculina", "Corte y limado de uñas, tratamiento de cutículas, hidratación y pulido (sin esmalte). Ideal para imagen profesional o cuidado personal.", 30, 500, null), 
];