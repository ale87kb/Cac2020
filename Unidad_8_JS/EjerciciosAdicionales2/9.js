function ordenAlfabetico(cadena){
    return String(cadena.split('').sort().join(''));
}

let x = "webmaster";
console.log(x);
console.log(ordenAlfabetico(x));
