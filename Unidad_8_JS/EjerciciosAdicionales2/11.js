function palabraMasLarga(cadena){
    let array = cadena.trim().split(" ");
    let ordenado = array.sort((anterior, siguiente)=>{ 
        return siguiente.length - anterior.length;
    });
    return ordenado[0];
}

let x = "Tutorial de desarrollo web";
console.log(palabraMasLarga(x));