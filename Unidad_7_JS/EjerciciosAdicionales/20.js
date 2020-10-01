let frase = prompt("Escriba una frase");
let parrafo = frase;
while(confirm("Desea continuar?")){
    frase = prompt("Escriba una frase");
    parrafo += " - " + frase; 
}
document.write(parrafo);