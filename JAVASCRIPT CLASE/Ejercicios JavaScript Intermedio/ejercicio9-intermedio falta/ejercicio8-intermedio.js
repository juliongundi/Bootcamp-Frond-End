
let request = new Request('https://pokeapi.co/api/v2/pokemon');

fetch(request)
    .then(function (response) {
        return response.json();
    })
    //Muestra una lista de Poquemon
    .then(function(datosResults){
        console.log(datosResults);
        var results = datosResults.results;
        //Hacemos un bucle
        for (let i = 0; i < results.length; i++) {
            var pokemon = results[i];
            //Empezamos la tabla
            let fila = document.createElement('tr');
            let celda1 = document.createElement('td');
            let celda2 = document.createElement('td');
            celda1.innerText = pokemon.name;
            celda2.innerText = pokemon.url;
            fila.appendChild(celda1);
            fila.appendChild(celda2);

            let tableBody = document.querySelector(".table-body");
            tableBody.appendChild(fila);
        }
    });
    let click = document.querySelector('a');
    click.appendChild


    
    
        
    
        
