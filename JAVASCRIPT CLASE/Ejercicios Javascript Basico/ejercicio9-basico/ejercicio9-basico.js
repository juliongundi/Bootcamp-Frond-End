function notas() {
    var notasIntroducidas = [];
    while (nota != "FIN") {  //Hasta que el usuario no ponga FIN continuara el contador
        var nota = prompt ("Introduce una nota " + " (FIN-para terminar).");
        nota = nota.toUpperCase();
        if (nota != "FIN"){
            nota = parseFloat(nota);
            if (nota <= 10) {
                notasIntroducidas.push(nota);
                console.log(nota);
                console.log(notasIntroducidas);
            }
            else {
                alert("Por favor, introduce un número del 1 al 10")
            }
        }
    }
    
    var media = 0;
    for (var i = 0; i < notasIntroducidas.length ;i++) {
        media = media + notasIntroducidas[i];
        console.log(media);
    }
    media = media/notasIntroducidas.length;
    alert("La media de tus notas es " + media.toFixed(2));
    if (media < 5) {
        alert("Has suspendido");
    } else if (media < 6) {
        alert("Suficiente: Estas aprobado/a");
        } else if (media < 7) {
            alert("Bien: Estas aprobado/a");
            } else if (media < 9) {
                alert("Notable: Estas aprobado/a, sigue asi...");
                } else if (media < 10) {
                    alert("Sobresaliente, ¡Enhorabuena!");
                        } else if (media == 10) {
                            alert("Has sacado matrícula, ¡Enhorabuena!");
    }
}

notas();