/*
Primera forma:
*/

/*
let numero = prompt("Ingrese un número");
let suma = 0;
if(Number(numero) == numero){
    numero = Number(numero);
    suma += numero; 
}else if(numero!= undefined){
    alert("No es un número");
}
while(numero != undefined){
    numero = prompt("Ingrese un número");
    if(Number(numero) == numero){
        numero = Number(numero);
        suma += numero; 
    }else if(numero!= undefined){
        alert("No es un número");
    }
}
document.write(suma);
*/

/*
Otra forma:
*/
let numero = 0;
let suma = 0;
do{
    numero = prompt("Ingrese un número");
    if(numero == Number(numero)){
        numero = Number(numero);
        suma += numero; 
    }else if(numero != undefined){
        alert("No es un número");
    }

}while(numero!=undefined);
document.write(suma);
