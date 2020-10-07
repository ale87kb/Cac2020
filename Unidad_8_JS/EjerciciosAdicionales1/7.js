function cuadrado(valor){
    if(Number(valor) === valor){
        return valor*valor;
    }else{
        console.error("Función cuadrado: Error de parámetro.", valor + ":" + typeof valor);
    }
}

console.log(cuadrado(4));
console.log(cuadrado(4.2));
cuadrado("asas");