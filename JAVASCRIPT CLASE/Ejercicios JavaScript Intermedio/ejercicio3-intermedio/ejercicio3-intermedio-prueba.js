console.log("Soy un Zoologico");


class zoo {
    //Aqui creamos la lista base que luego le meteremos detalles
    constructor(nombrezoo, ubicacion, aforo, horario) {
        this._nombrezoo = nombrezoo;
        this._ubicacion = ubicacion;
        this._aforomax = aforo;
        this._horario = horario;
        this._areas = [];
    }
    addArea(area) {
        this._areas.push(area);
    }
}

class area {
    //Aqui creamos la lista base que luego le meteremos detalles
    constructor(nombredearea, descripcion, animales) {
        this._nombredearea = nombredearea;
        this._descripcion = descripcion;
        this._animales = animales;
    }
}

class animal {
    //Aqui creamos la lista base que luego le meteremos detalles
    constructor(nombreanimal, fechanacimiento, salud, paisdeorigen, tipo) {
        this._nombreanimal = nombreanimal;
        this._fechanacimiento = fechanacimiento;
        this._salud = salud;
        this._paisdeorigen = paisdeorigen;
        this._tipo = tipo;
    }
}


// Estos son los parametros que se van a ir añadiendo dentro de Zoo
var zooMadrid = new zoo("Aquopolis", "Madrid", 30000, "9 a 22");
var zooBarcelona = new zoo("Animalia", "Barcelona", 25000, "9 a 23");


var animalesArea1 = [];
var animalesArea2 = [];
var animalesArea3 = [];

//Guardar en Areas
animalesArea1.push(oso, lobo);
animalesArea2.push(aguila, cuervo);
animalesArea3.push(tortuga);

// Estos son los parametros que se van a ir añadiendo dentro de Animal
var oso = new animal("Oso", "2012", "97", "Alemania");
var aguila = new animal("Aguila", "2015", "99", "Portugal");
var cuervo = new animal("Cuervo", "2010", "80", "EEUU");
var tortuga = new animal("Tortuga", "2001", "100", "Brasil");
var lobo = new animal("Lobo", "2003", "98", "Rusia");


// Estos son los parametros que se van a ir añadiendo dentro de Area
let mamiferos = new area("Mamiferos", "Los mamiferos viven en esta area" , animalesArea1);
let aves = new area("Aves", "Las aves viven en esta area" , animalesArea2);
let reptiles = new area("Reptiles" , "Los reptiles viven en esta area", animalesArea3);

var areas = [];
areas.push(mamiferos);
areas.push(aves);
areas.push(reptiles);

// Añado las areas a los zoo
zooMadrid.addArea(mamiferos);
zooMadrid.addArea(aves);
zooMadrid.addArea(reptiles);


