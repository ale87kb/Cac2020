let n1 = Number(prompt("Escriba un número"));
let n2 = Number(prompt("Escriba otro número"));
let n3 = Number(prompt("Escriba ultimo número"));
if ((n1>n2) & (n1>n3)){
    document.write("El número " + n1 + " es mayor");
}else if(n2>n3){
    document.write("El número " + n2 + " es mayor");
}else{
    document.write("El número " + n3 + " es mayor");
}