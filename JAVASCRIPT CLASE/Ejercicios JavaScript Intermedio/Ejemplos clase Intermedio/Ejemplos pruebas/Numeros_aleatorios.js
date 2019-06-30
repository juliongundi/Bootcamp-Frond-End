var numeros = [];
for (let i = 0; i < 50; i++) {
    numeros.push(Math.floor((Math.random() * 50) + 1)); 
}

var pares = [];
var impares = [];
for (let i = 0; i < numeros.length; i++) {
    if(numeros[i]%2==0){
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i]);
    }
}

document.write("MIS NUMEROS PARES: " +pares+"<br>");
document.write("MIS NUMEROS IMPARES: " +impares);

