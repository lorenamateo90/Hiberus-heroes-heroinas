import Persona from "./persona.js";


export default class Socio extends Persona {
    constructor(dni, nombre, apellido, numSocio) {
        
        super(dni, nombre, apellido);
        this._numSocio = numSocio;
        
    }

    get numSocio() {
        return this._numSocio;
    }

    //comportamiento
    entrenar() {
        return "Estoy entrenando...";
    }
}