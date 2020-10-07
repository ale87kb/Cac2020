function areaCircunferencia(radio){
    if(Number(radio) === radio){
        return Math.PI * (radio*radio);
    }else{
        console.error("Función areaCircunferencia: Error de parámetro.", radio + ":" + typeof radio);
    }
}

console.log(areaCircunferencia(2));
areaCircunferencia("2");