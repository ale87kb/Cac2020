function ultimoDiaDelMes(d,m,a){
    cd = cantidadDias(d,m,a);
    if(cd!=undefined && cd>=d && d>0){
        return cantidadDias(d,m,a);
    }else{
        console.error("Función diaSiguiente: Error de parámetro. Fecha fuera de rango.");
    }
}
function cantidadDias(d,m,a){
    if(d>=1 && d<=31){
        if(anioBisiesto(a)){
            if(m==2){
                return 29;
            }else{
                return cantidadDiasMes(m);
            }
        }
        return cantidadDiasMes(m);
    }else{
        console.error("Función cantidadDias: Error de parámetro de día. Fuera de rango.", d + ":" + typeof d);
    }
}
function cantidadDiasMes(mes){
    switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          return 31;
        case 4:
        case 6:
        case 9:
        case 11:
          return 30;
        case 2:
          return 28;
        default:
            console.error("Función cantidadDiasMes: Error de parámetro.", mes + ":" + typeof radio);
    }
}
function anioBisiesto(anio){
    if((anio % 4 ==0 && anio % 100 != 0 ) || (anio % 400 == 0)){
        return true;
    }else{
        return false;
    }
}

console.log(ultimoDiaDelMes(1,3,2020)); // 31
console.log(ultimoDiaDelMes(29,2,2020)); // 29
console.log(ultimoDiaDelMes(1,3,1999)); // 31
console.log(ultimoDiaDelMes(28,2,1999)); // 28
console.log(ultimoDiaDelMes(15,6,1999)); // 30
console.log(ultimoDiaDelMes(85,7,1999)); // ERROR
console.log(ultimoDiaDelMes(8,71,1999)); // ERROR
console.log(ultimoDiaDelMes(31,12,1999)); // 31
console.log(ultimoDiaDelMes(31,10,1999)); // 31
console.log(ultimoDiaDelMes(31,11,1999)); // ERROR
console.log(ultimoDiaDelMes(1,1,1999)); // 31