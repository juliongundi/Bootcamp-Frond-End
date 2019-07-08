//console.log('correcto');

document.querySelector('#boton').addEventListener('click', traerDatos);
//No me sale cerrar bua.... sin hacer una function
//document.querySelector('#boton2').addEventListener('click', traerDatos.close());

function traerDatos(){

    console.log('datos de la funcion');

    const xml = new XMLHttpRequest();

    xml.open('GET', 'https://api.oceandrivers.com:443/v1.0/getWebCams/', true);

    xml.send();

    xml.onreadystatechange = function() {

        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res =document.querySelector('#res');
            res.innerHTML = '';
            for(let item of datos) {
                //console.log(item.nome);
                res.innerHTML += `
                    <tr>
                        <td>${item.name}</td>
                        <td><button ><a href="${item.url}">Ver</a></button></td>
                    </tr>
                `
            }
        }
    }
}