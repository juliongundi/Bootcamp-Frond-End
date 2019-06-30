
function esPalindromo(Palindromo) {
    var esPalindromo = "";
    if (Palindromo) {
        esPalindromo = "Es Palindromo ";
    } else {
        esPalindromo = "No es Palindromo ";
    }
    return esPalindromo;
}

var nombre = esPalindromo(true);

console.log(nombre);


function esPalindromo() {
    let esPalindromo = "Hola clase";
    let i = esPalindromo.length -1;
    let nombreVacio = "";
    while(i >= 0){
        nombreVacio = nombreVacio + esPalindromo[i];
        i--;
    }
    console.log(esPalindromo);
    console.log(nombreVacio);
}
esPalindromo();





















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