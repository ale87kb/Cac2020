function perimetroCircunferencia(radio){
    if(Number(radio) === radio){
        return 2 * Math.PI * radio;
    }else{
        console.error("Función perimetroCircunferencia: Error de parámetro.", radio + ":" + typeof radio);
    }
}

console.log(perimetroCircunferencia(2));
perimetroCircunferencia("2");