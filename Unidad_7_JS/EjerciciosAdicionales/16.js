let n1 = Number(prompt("Escriba un número"));
let n2 = Number(prompt("Escriba otro número"));
let menor;
if (n1>n2){
    menor = n2;
}else{
    menor = n1;
}
for(let i=0; i<=menor; i++){
    if(n1 % i === 0 && n2 % i === 0){
        document.write(i, ", ");
    }
}