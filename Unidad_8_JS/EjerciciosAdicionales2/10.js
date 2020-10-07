function camelCase(cadena){
    return cadena.trim().split(' ').map((palabra) => palabra[0].toUpperCase() + palabra.substr(1)).join(" ");
}

let x = "prince of persia, asda, asdasd as asdas  ";
console.log(x);
console.log(camelCase(x));