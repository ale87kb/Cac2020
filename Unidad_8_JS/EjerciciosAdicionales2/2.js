let edades = [23,22,35,41,33,36,50,24,22,31,28,27];
let i = 0;
console.log("Con while");
while(i<edades.length){
    if(edades[i]%2==0){
        console.log(edades[i]);
    }
    i++;
}

console.log("Con For");
for(let j = 0; j<edades.length; j++){
    if(edades[j]%2==0){
        console.log(edades[j]);
    }
}

console.log("Con Foreach");
edades.forEach(function(edad){
    if(edad%2==0){
        console.log(edad);
    }
});

console.log("Con Foreach arrow function");
edades.forEach(edad => {
    if(edad%2==0) console.log(edad);
});