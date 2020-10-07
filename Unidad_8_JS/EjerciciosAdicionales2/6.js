function valoreRepetidos(elementos){
    let ordenados = menorAMayor(elementos);
    let repetidos = [];

    //CON FOR
    for(let i=0; i<ordenados.length-1; i++){
        if(ordenados[i+1] == ordenados[i]){
            repetidos.push(ordenados[i]);
        }
    }

    //CON FOREACH
    /*
    ordenados.forEach((valor,indice) => {
        if(ordenados[indice+1] == valor){
            repetidos.push(valor);
        }
    });
    */
    console.log(repetidos);
}
function menorAMayor(array){
    return array.sort((a,b) => a-b);
}

var manzanas = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
valoreRepetidos(manzanas);