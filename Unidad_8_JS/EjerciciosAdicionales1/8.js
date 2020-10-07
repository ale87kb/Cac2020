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
function cuadrado(valor){
    if(Number(valor) === valor){
        return valor*valor;
    }else{
        console.error("Función cuadrado: Error de parámetro.", valor + ":" + typeof valor);
    }
}
function imprimirValores(valor){
    document.write("Valores para " + valor);
    document.write("<br>");
    document.write("El siguiente es: " + siguiente(valor));
    document.write("<br>");
    document.write("El doble es: " + doble(valor));
    document.write("<br>");
    document.write("El cuadrado es: " + cuadrado(valor));
    document.write("<br>----------<br>");
}

imprimirValores(2);
imprimirValores("5");