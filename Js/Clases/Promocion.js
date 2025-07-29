let promocionId = 1;

class Promocion {

    constructor (nombre, descripcion, precio) {
        this.promocionId = promocionId;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.validar();
        promocionId++;
    }

    validar() {

    }

}

const promociones = [
    new Promocion("Pack “Renovate”", "Ideal para quienes buscan un cambio rápido y efectivo. Incluye corte y perfilado de barba para renovar tu imagen en una sola sesión.", 950),
    new Promocion("Pack “Imagen Completa”", "Combinamos corte, arreglo de barba y manicura para que salgas con un look pulido y profesional de pies a cabeza.", 1350),
    new Promocion("Color + Corte", "Perfecto si querés un cambio de look más audaz. Sumamos coloración al corte para que puedas expresarte con estilo y frescura.", 1400),
]