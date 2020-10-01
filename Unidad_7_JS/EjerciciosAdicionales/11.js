let frase = prompt("Escriba una frase");
const vocales = "aeiou";
let contador = 0;
for(let i=0; i<frase.length; i++){
    if(vocales.includes(frase[i])){
        contador ++;
    }
}
document.write("Cantidad de vocales: " + contador );