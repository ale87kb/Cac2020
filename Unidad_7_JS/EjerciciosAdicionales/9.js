let frase = prompt("Escriba una frase");
let contador = 0;
for(let i=0; i<frase.length; i++){
    if(frase.substring(i, i+1) == 'a'){
        contador ++;
    }
}
document.write("Cantidad de letras a: " + contador );