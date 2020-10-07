function unirEnCadena(array){
    let texto = "";
    const separador = ", ";
    for(let i=0; i<array.length; i++){
        if( i != array.length-1){
            texto += array[i] + separador;
        }else{
            texto += array[i];
        }
    }
    console.log(texto);
}

function unirEnCadenaJoin(array, separador){
    let texto = array.join(separador);
    console.log(texto);
}

let myColor = ["Red", "Green", "White", "Black"];
unirEnCadena(myColor);
unirEnCadenaJoin(myColor, ", ");