document.write("<hr>");
let fin = 500
for(let i=1; i<=fin; i++){
    document.write(i);
    if(i%4 == 0){
        document.write(" (Múltiplo de 4)");
    }
    if(i%9 == 0){
        document.write(" (Múltiplo de 9)");
    }
    document.write("<br>");
    if(i%5 == 0){
        document.write("<hr>");
    }
}