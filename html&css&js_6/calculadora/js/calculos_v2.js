function sumar(x, y) {
    let resultado = 0; //variable local
    resultado = x + y;
    return resultado;
}

function restar(x, y) {
    return x - y;
}

export { sumar, restar };