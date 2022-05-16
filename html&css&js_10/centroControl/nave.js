export default class Nave{
    constructor(nombre) {
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }
}