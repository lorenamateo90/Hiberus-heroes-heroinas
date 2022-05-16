export default class Persona {
    constructor(dni, nombre, apellido) {
        this._dni = dni;
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get dni() {
        return this._dni;
    }
    get nombre() {
        return this._dni;
    }
    get apellido() {
        return this._dni;
    }
    get nombreCompleto() {
        return `${ths._nombre} ${this._apellido}`; 
    }
}