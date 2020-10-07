function invertirNumero(numero){
    //Convierte el numero a string, lo separa, lo invierte, y lo vuelve a unir, convirtiendolo nuevamente a numero.
    return Number(numero.toString().split('').reverse().join(''));
}

let x = 123456;
console.log(x);
console.log(invertirNumero(x));