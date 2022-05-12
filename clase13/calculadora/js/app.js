import { sumar, restar, multiplicar, dividir } from './calculos.js';

export default function obtenerResultado(op, x, y) {
    let resultado = 0;
    
    // if (op == "s") {
    //     resultado = sumar(x, y);
    // } else if (op == "r") {
    //     resultado = restar(x, y);
    // }

    switch(op){
        case "s":
            resultado = sumar (x, y);
            break;
        case "r":
            resultado = restar (x, y);
            break;
        case "m":
            resultado = multiplicar (x, y);
            break;
        case "d":
            resultado = dividir (x, y);
            break;


        default:
            resultado = null;
       
    }

    return resultado;

}

