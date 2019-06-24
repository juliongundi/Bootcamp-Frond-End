
//mmmm
var frase = "Hola clase, que tal estáis?";
var fraseSinEspacios = "";
var fraseAcabada = false;
var indice = 0;
while(!fraseAcabada){
    var letraActual = frase[indice];
    if(letraActual != " ") {
        fraseSinEspacios = fraseSinEspacios + letraActual;
    }
    if(indice == frase.length){
        fraseAcabada = true;
    }
    indice = indice +1;
}

// esta mal
var nombre = "Julio";
function stringInverso(string){
    while 
}

stringInverso(nombre);



// cuenta hacia atras
var nombre = "julio";
var i = nombre.length - 1;
var nombreMayus = "";
while(i >= 0){
    nombreMayus = nombreMayus + nombre[i];
    i--;
}
console.log(nombreMayus)