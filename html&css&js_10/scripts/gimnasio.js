
export default class Gimnasio {
    //estado
    constructor(cuota, ubicacion){
        //atributos
        this._socios = new Array(); //[]
        this._cuota = cuota > 0 ? cuota : 0;
        this._ubicacion = ubicacion;
    }

    //getter/setters
    get cuota() {
        return this._cuota;
    }

    set cuota(valor) {
        if (cuota > 0){
            this._cuota = valor;
        }
    }

    get ubicacion() {
        return this._ubicacion;
    }
    
    //comportamniento
    matricular(socio) {
        if (socio) {
            this._socios.push(socio);
        }
    }

    listarSocios() {
        this._socios.forEach(socio => console.log(socio));
    }
} 