function promedio(){
    let suma = 0; 
    let contador = 0; 
    let nota  = 0;

    nota = Number(prompt("Ingrese una nota"));
    while(nota != -1){
        if(nota>0 && nota<=10){
            contador +=1;
            suma += nota;
        }else{
            alert("Nota incorrecta");
        }
        nota = Number(prompt("Ingrese una nota"));
    }
    return suma/contador;
}

console.log(promedio());