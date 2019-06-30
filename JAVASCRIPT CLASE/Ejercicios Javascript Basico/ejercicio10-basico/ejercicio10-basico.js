//Las dos funciones funcionan.

/*function contador() {
    var ano = prompt("Introduzca su Año de nacimiento");
    var mes = prompt("Introduzca su Mes de nacimiento");
    var dia = prompt("Introduzca su Dia de nacimiento");
    
    alert("Su fecha de nacimiento es el: "  + dia + "/" + mes + "/" + año);

}
contador();
*/


function contador() {
    var ano = prompt("Introduzca su Año de nacimiento");
    var mes = prompt("Introduzca su Mes de nacimiento");
    var dia = prompt("Introduzca su Dia de nacimiento");
    
    var edad = new Date(ano, mes, dia);
    var anoactual = 2019;
    alert("Su fecha de nacimiento es el: "  + edad);

    alert("Y tienes " + (anoactual - ano) + " años")
}
contador();