let edades = [23,22,35,41,33,36,50,24,410,22,31,28,27,101];

function menorAMayor(array){
    return array.sort((a,b) => a-b);
}

function numeroMasBajo(array){
    console.log(menorAMayor(array)[0]);
}

numeroMasBajo(edades);