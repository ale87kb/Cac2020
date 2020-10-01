let n1 = Number(prompt("Escriba un número"));
let contador = 0;
let i = 1;
while( i <= n1){
    if (n1 % i === 0){
        contador ++;
    }
    i++;
}

if(contador == 2){
    document.write("El número " + n1 + " es primo.");
}else{
    document.write("El número " + n1 + " NO es primo.");
}