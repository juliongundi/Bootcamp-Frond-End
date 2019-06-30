console.log("Soy el 8");

class EMpresa {
    constructor(nombre, frase, negocio) {
        this._nombre = nombre;
        this._frase = frase;
        this._negocio = negocio;
    }

    pintar() {
        document.querySelector("#nombreEmpresa").innerText = this._nombre;
        document.querySelector("#fraseEmpresa").innerText = this._frase;
        document.querySelector("#negocioEmpresa").innerText = this._negocio;
    }
}


class Usuario {
    constructor(id, nombre, email, empresa, direccion){
        this._id = id;
        this._nombre = nombre;
        this._email = email;
        this._empresa = empresa;
        this.direccion = direccion;
    }

    pintar(){
        console.log("hola, me llamo " + this._nombre);

        /*//creo fila
        let fila = document.createElement("tr");

        //creo celdas
        let celdaID = document.createElement("td");
        let celdaNombre = document.createElement("td");
        let celdaEmail = document.createElement("td");
        let celdaDireccion = document.createElement("td");
        let celdaEmpresa = document.createElement("td");

        //creo botones


        let botonEmpresa = document.createElement("button");

        botonEmpresa.classList.add("mi-boton-bonito");
        botonEmpresa = "VER";
        let botonDireccion = document.createElement("button");

        //relleno celdas
        celdaID.innerHTML = this._id;
        celdaNombre.innerHTML = this._nombre;
        celdaEmail.innerHTML = this._Email;
        celdaDireccion.appendChild(botonDireccion);
        celdaEmpresa.appendChild(botonEmpresa);

        //inserto las celdas en la fila
        fila.appendChild(celdaID);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaEmail);
        fila.appendChild(celdaDireccion);
        fila.appendChild(celdaEmpresa);

        // inserto la fila en la tableLayout: 
        let tableBody = document.querySelector("#usersTableBody");
        tableBody.appendChild(fila);*/

        let fila = document.createElement("tr");
        let contenidoFila = `
            <td>${ this._id }</td>
            <td>${ this._nombre }</td>
            <td>${ this._email }</td>
            <td><button id="verDireccion" class="mi-botton-bonito">VER</button></td>
            <td><button id="verEmpresa" class="mi-botton-bonito">VER</button></td>
        `;
        fila.innerHTML = contenidoFila;

        fila.querySelector("#verEmpresa").addEventListener("click", () => {
            this._empresa.pintar();
        })
        // inserto la fila en la tableLayout: 
        let tableBody = document.querySelector("#usersTableBody");
        tableBody.appendChild(fila);

    }
    mostrarEmpresa(){
        console.log("Mi empresa es " + this._empresa);

    }
    mostrarDireccion(){
        console.log("Mi direccion es " + this._direccion);
    }
}


class Agenda  {
    constructor(){
        this._usuarios = [];
    }
    buscarUsuario() {
        //busca un usuario y te lo devuelve
    }
    aniadirUsuario(nombre) {
        //Añade un usuario a la agenda
        this._usuarios.push(nombre);
    }

    pintarListadoUsuarios() {
        for(let user of this._usuarios){
            user.pintar();
        }
    }
    rellenarConDatosDeLaApi() {
        // hace una peticio, se trae los usuarios y los añade a esta agenda
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                //Convierte a Json, no lo toco
                return response.json();
            })
            .then((data) => {
                for(let userData of data) {
                    let empresa = new EMpresa(userData.company.name, userData.company.catchPhrase, userData.company.bs);
                    this.aniadirUsuario(new Usuario(userData.id, userData.name, userData.email, empresa, userData.address));
                    console.log(userData.address);
                    console.log(userData.company);
                }
                //Esto estaba antes
                //this.dimeNumeroUsuarios();
            });
    }
    dimeNumeroUsuarios() {
        console.log(this._usuarios.length);
    }

    rellenarConDatosDePrueba(){
        var usuarioDePrueba = new Usuario(10, "Fran","franl@gmail.com", "Minsait", "Mi calle 240");
        var usuarioDePrueba2 = new Usuario(10, "Marylin","mar@gmail.com", "Upgrade", "Mi calle 241");
        var usuarioDePrueba3 = new Usuario(10, "David","David@gmail.com", "Upgrade", "Mi calle 242");
        this.aniadirUsuario(usuarioDePrueba);
        this.aniadirUsuario(usuarioDePrueba2);
        this.aniadirUsuario(usuarioDePrueba3);
    }
}

var miNuevaAgenda = new Agenda();

//miNuevaAgenda.rellenarConDatosDePrueba();
miNuevaAgenda.rellenarConDatosDeLaApi();

setTimeout(() => miNuevaAgenda.pintarListadoUsuarios(), 2000)





