/*
25)Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) :
1
12
123
1234
12345
123456
*/
let numero = prompt("Ingrese un número");
if(numero>0 && numero<=50){
    for(i=1; i<=numero; i++){
        for(j=1; j<=i; j++){
            document.write(j);
        }
        document.write("<br>");
    }
}else{
    alert("Numeroo incorrecto.");
}