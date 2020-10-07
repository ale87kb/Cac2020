let edades = [23,22,35,41,33,36,50,24,22,31,28,27];
let i = 0;
console.log("Con while");
while(i<edades.length){
    console.log(edades[i]);
    i++;
}

console.log("Con For");
for(let j = 0; j<edades.length; j++){
    console.log(edades[j]);
}

console.log("Con Foreach");
edades.forEach(function(edad){
    console.log(edad);
});

console.log("Con Foreach arrow function");
edades.forEach(edad => console.log(edad));