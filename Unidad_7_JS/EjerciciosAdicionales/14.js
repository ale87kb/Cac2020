let n1 = Number(prompt("Escriba un número"));
if (n1 % 2 === 0 || n1 %3 ===0 || n1 %5 === 0 || n1 % 7 === 0){
    if(n1 % 2 === 0){
        document.write("El número " + n1 + " es divisible por 2 <br>");
    }
    if(n1 % 3 === 0){
        document.write("El número " + n1 + " es divisible por 3 <br>");
    }
    if(n1 % 5 === 0){
        document.write("El número " + n1 + " es divisible por 5 <br>");
    }
    if(n1 % 7 === 0){
        document.write("El número " + n1 + " es divisible por 7 <br>");
    }
}else{
    document.write("El número " + n1 + " NO es divisible por 2, 3, 5 ni 7");
}