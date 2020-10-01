let frase = prompt("Escriba una frase");
for(let i=0; i<frase.length; i++){
    if(frase.substring(i,i+1) === "a" || 
    frase.substring(i,i+1) === "e" || 
    frase.substring(i,i+1) === "i" || 
    frase.substring(i,i+1) === "o" || 
    frase.substring(i,i+1) === "u"){
        document.write(frase.substring(i,i+1) + "\n");
    }
}