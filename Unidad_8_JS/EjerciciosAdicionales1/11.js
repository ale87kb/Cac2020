function perimetroCuadrado(longitud){
    if(Number(longitud) === longitud){
        return longitud*4;
    }else{
        console.error("Función perimetroCuadrado: Error de parámetro.", longitud + ":" + typeof longitud);
    }
}

console.log(perimetroCuadrado(4));
console.log(perimetroCuadrado(4.5));
console.log(perimetroCuadrado("4"));