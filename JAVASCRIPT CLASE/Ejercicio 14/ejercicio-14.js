function noticia() {
    // Crear article
    var article = document.createElement("article");
    //crear h1
    var titulo = document.createElement("h1");
    // capturar valor input  document.getElementById("titulo").value;
    titulo.innerText = document.getElementById("titulo").value;
    article.appendChild(titulo)
    //crear img
    var img = document.createElement("img");
    img.src = document.getElementById("url").value;
    article.appendChild(img)
    //crear autor
    var autor = document.createElement("p");
    autor.className = "noticia__autor"
    autor.innerText = document.getElementById("autor").value;
    article.appendChild(autor)
    //crear texto
    var texto = document.createElement("p");
    texto.className = "noticia__texto";
    texto.innerText = document.getElementById("texto").value;
    article.appendChild(texto)

    // meter article en la columna de la izquierda
    var section = document.querySelector(".main__caja1");
    section.appendChild(article)


}