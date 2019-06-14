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


