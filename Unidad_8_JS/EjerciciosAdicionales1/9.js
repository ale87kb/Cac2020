function imprimirElDobleDelSiguiente(valor){
    document.write("Valores para " + valor);
    document.write("<br>");
    document.write("El doble del siguiente: " + doble(siguiente(valor)));
    document.write("<br>----------<br>");
}
function siguiente(entero){
    if(Number(entero) === entero && Number.isInteger(entero)){
        return entero + 1;
    }else{
        console.error("Función siguiente: Error de parámetro.", entero + ":" + typeof entero);
    }
}
function doble(valor){
    if(Number(valor) === valor){
        return valor*2;
    }else{
        console.error("Función doble: Error de parámetro.", valor + ":" + typeof valor);
    }
}

imprimirElDobleDelSiguiente(2);