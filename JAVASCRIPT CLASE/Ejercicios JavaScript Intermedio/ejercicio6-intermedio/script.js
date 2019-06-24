if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
        let carros = JSON.parse(httpRequest.responseText);
        console.log("Respuesta:");
        console.log(httpRequest.responseText);

        //para cada coche
        //crea un transform
        //lo inserto en la tableLayout
        for (let index = 0; index < carros.length; index++) {
            let coche = carros[index];

            let fila = document.createElement('tr');
            let celda1 = document.createElement('td');
            let celda2 = document.createElement('td');
            celda1.innerText = coche.codigo;
            fila.appendChild(celda1);
            fila.appendChild(celda1);

            let tableBody = document.querySelector(".table-body");
            tableBody.appendChild(fila);
        }
        console.log(carros);
    } else {
        alert("There was an error");
    }
}