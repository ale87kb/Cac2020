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

console.log(cantidadDias(2,2,2020));
console.log(cantidadDias(2,2,1999));
console.log(cantidadDias(15,6,1999));
console.log(cantidadDias(85,7,1999));
console.log(cantidadDias(8,71,1999));