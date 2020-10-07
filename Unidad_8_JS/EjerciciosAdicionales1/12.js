function superficieCuadrado(longitud){
    if(Number(longitud) === longitud){
        return longitud*longitud;
    }else{
        console.error("Función superficieCuadrado: Error de parámetro.", longitud + ":" + typeof longitud);
    }
}

console.log(superficieCuadrado(4));
console.log(superficieCuadrado(4.5));
console.log(superficieCuadrado("4"));