let nota = prompt("Escriba la nota");
if(nota >= 0 && nota < 3){
    document.write(nota + " : Muy deficiente.");
}else if(nota >= 3 && nota < 5){
    document.write(nota + " : Insuficiente.");
}else if(nota >= 5 && nota < 6){
    document.write(nota + " : Suficiente.");
}else if(nota >= 6 && nota < 7){
    document.write(nota + " : Bien.");
}else if(nota >= 7 && nota < 9){
    document.write(nota + " : Notable.");
}else if(nota >= 9 && nota <= 10){
    document.write(nota + " : Sobresaliente.");
}else{
    document.write("Nota fuera de rango.");
}