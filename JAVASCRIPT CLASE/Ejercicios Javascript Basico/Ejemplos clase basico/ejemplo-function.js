function generarMensajeDeSaludo(nombreDeLaPersona, esTarde) {
    var mensajeDeSaludo = "";
    if (esTarde) {
        mensajeDeSaludo = "Buenas tardes " + nombreDeLaPersona;
    } else {
        mensajeDeSaludo = "Buenos días " + nombreDeLaPersona;
    }
    return mensajeDeSaludo;
}

var saludo = generarMensajeDeSaludo("David", true);

console.log(saludo);