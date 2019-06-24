var frase = "Hola clase, qué tal estáis?";
var fraseSinEspacios = "";
var fraseAcabada = false;
var indice = 0;
// mientras que no se me acabe la frase
while(!fraseAcabada){
  // guardo una letra
  var letraActual = frase[indice];
  
  // si no es un espacio, me lo quedo
  if(letraActual != " ") {
    fraseSinEspacios = fraseSinEspacios + letraActual;
  }
  indice = indice + 1;

  if(indice == frase.length) {
    fraseAcabada = true;
  }
}

console.log(fraseSinEspacios);