
    function noticia() {

        // Crear article
        var article = document.createElement("article");
    
        //crear h1
        var titulo = document.createElement("h1");
            // capturar valor input  document.getElementById("titulo").value;
            titulo.innerText = document.getElementById("nombre").value;
            article.appendChild(titulo)
    
        //crear autor
        var autor = document.createElement("p");
            autor.className = "noticia__autor"
            autor.innerText = document.getElementById("cantidad").value;
            article.appendChild(autor)
    
        //crear texto
        var texto = document.createElement("p");
            texto.className = "noticia__texto";
            texto.innerText = document.getElementById("precio").value;
            article.appendChild(texto)
    
        // meter article en la columna de la izquierda
        var section = document.querySelector(".main__caja1");
            section.appendChild(article)
    
    }
    noticia();
