function anioBisiesto(anio){
    if((anio % 4 ==0 && anio % 100 != 0 ) || (anio % 400 == 0)){
        return anio + ": Año Bisiesto.";
    }else{
        return anio + ": Año NO Bisiesto.";
    }
}

console.log(anioBisiesto(2020));
console.log(anioBisiesto(2021));