function siguiente(entero){
    if(Number(entero) === entero && Number.isInteger(entero)){
        return entero + 1;
    }else{
        console.error("Función siguiente: Error de parámetro.", entero + ":" + typeof entero);
    }
}

let h = siguiente(32);
console.log(h);
siguiente("56");
siguiente(56.1);