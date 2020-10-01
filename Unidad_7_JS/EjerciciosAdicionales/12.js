let frase = prompt("Escriba una frase");
let contA = 0;
let contE = 0;
let contI = 0;
let contO = 0;
let contU = 0;
for(let i=0; i<frase.length; i++){
    if(frase.substring(i,i+1) === "a"){
        contA ++;
    }else if (frase.substring(i,i+1) === "e"){
        contE ++;
    }else if (frase.substring(i,i+1) === "i"){
        contI ++;
    }else if (frase.substring(i,i+1) === "o"){
        contO ++;
    }else if (frase.substring(i,i+1) === "u"){
        contU ++;
    }
}
document.write("Frase: " + frase + "<br>");
document.write("A: " + contA + "<br>");
document.write("E: " + contE + "<br>");
document.write("I: " + contI + "<br>");
document.write("O: " + contO + "<br>");
document.write("U: " + contU + "<br>");