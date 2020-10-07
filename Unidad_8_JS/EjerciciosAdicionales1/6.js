function doble(valor){
    if(Number(valor) === valor){
        return valor*2;
    }else{
        console.error("Función doble: Error de parámetro.", valor + ":" + typeof valor);
    }
}

doble("asdas");
console.log(doble(2));