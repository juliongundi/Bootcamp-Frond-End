
// Leer nombre hacia atras
function stringInverso() {
    let stringInverso = "Hola clase";
    let i = stringInverso.length -1;
    let nombreVacio = "";
    while(i >= 0){
        nombreVacio = nombreVacio + stringInverso[i];
        i--;
    }
    console.log(nombreVacio);
}
stringInverso();

// Quitar todos los espacios de un string
function eliminarEspacios() {
    let eliminarEspacios = "Hola clase";
    
    console.log(eliminarEspacios.replace(/ /g, ""));
}
eliminarEspacios();


// Poner todas las letras en mayuscula
function ponerTodasLasLetrasMayusculas(){

    let ponerTodasLasLetrasMayusculas = "Hola clase";
    console.log(ponerTodasLasLetrasMayusculas.toUpperCase())
}
ponerTodasLasLetrasMayusculas();