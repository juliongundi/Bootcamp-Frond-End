/* Primero */

var variable;
console.log("valor: " + variable + " y Tipo: " + typeof(variable));

variable = 10;
console.log("valor: " + variable + " y Tipo: " + typeof(variable));

variable = "texto";
console.log("valor: " + variable + " y Tipo: " + typeof(variable));

variable = true;
console.log("valor: " + variable + " y Tipo: " + typeof(variable));

variable = null;
console.log("valor: " + variable + " y Tipo: " + typeof(variable));

/* segundo*/

var variable1 = 100 ;

var variable2 = 222;

var resultado = variable1 - variable2;

var mensaje = "El resuldado es: " + resultado;

alert(mensaje);


/* Tercero */

var variable1 = 100;

var variable2 = 200;

var sonIguales = variable1 == variable2;
var var1EsMenor = variable1 < variable2;

console.log("¿Las variables son iguales?");
console.log(sonIguales);

console.log("Var 1 es menor que var 2?");
console.log(var1EsMenor);


/* Cuarto */

/* entrar en navegador/sourcer/snippet */
var variable1 = true;
var variable2 = true;

var variable3 = variable1 && variable2;

alert(variable3);

/* Quinto */

var nombre = "Fran";
var otroNombre = "Julio";
var esIgual = nombre == otroNombre;
console.log(!esIgual);

/* Sexto */

var ahorros = 0;
console.log("Comenzamos con " + ahorros + " dólares");
while (ahorros < 100) {
    ahorros = ahorros + 10;
    console.log("Ahora tenemos " + ahorros + " dólares");

}
console.log("Terminamos con " + ahorros + " dólares")

/* Septimo */

var i = 0;
for (i = 0; i < 5; i++) {
    console.log("La variable i vale: " + i); 5
}
console.log("Ya ha terminado el bucle for");

/* Octavo */

var varible1 = "Hola";
switch(variable1){
    case "Hola":
        console.log("he entrado en el case 1");
    break;

    case "Valor 2":
        console.log("he entrado en el case 2");
    break;

    default:
        console.log("he entrado en el default");
    break;  
}

/* Noveno */

var paises = [ "Mejico", "España", "Chile", "peru" ];

console.log("El primer pais es: " + paises [0]);
console.log("El primer pais es: " + paises [2]);


/* Decimo */

var paises = [ "Mejico", "España", "Chile", "peru" ];

for (var indice = 0; indice < paises.length; indice++) {
    console.log("El pais numero " + indice + "  es " + paises[indice]);

}

/* Undecimo */

var ordenadores = [];
ordenadores.push("HP EliteBook");
ordenadores.push("Macbook Pro");

console.log(ordenadores);


ordenadores.unshift("Lenovo IdeaPad");

console.log(ordenadores);

/* Duodecimo */

var ordenadores = ["HP EliteBook", "Macbook Pro", "Lenovo IdeaPad"];

var ultimo = ordenadores.pop();
var primero = ordenadores.shift();

console.log(ordenadores);

/* mo */

var persona = {
    nombre: "Fran",
    apellidos: "Linde Blazquez",
    pais: "España",
    profesion: "Programador Front-End"
}

console.log("La persona se llama " + persona.nombre);
console.log("Y es " + persona.profesion);