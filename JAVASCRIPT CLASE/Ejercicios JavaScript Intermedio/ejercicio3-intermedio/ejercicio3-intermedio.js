class zoo {
    //Aqui creamos la lista base que luego le meteremos detalles
    constructor(nombrezoo, ubicacion, aforo, horario,) {
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
    constructor(nombreanimal, fechanacimiento, salud, paisdeorigen) {
        this._nombreanimal = nombreanimal;
        this._fechanacimiento = fechanacimiento;
        this._salud = salud;
        this._paisdeorigen = paisdeorigen;
    }
}

/////////////////////////////////
//Informacion de los zoologicos
var zooMadrid = new zoo("Aquopolis", "Madrid", 30000, "9 a 22");
var zooBarcelona = new zoo("Animalia", "Barcelona", 25000, "9 a 23");

////////////////////////////////

// Estos son los parametros que se van a ir añadiendo dentro de Area
var mamiferos = new area("Mamiferos", " viven en esta area " , animalesArea1);
var aves = new area("Aves", " viven en esta area " , animalesArea2);
var reptiles = new area("Reptiles" , " viven en esta area ", animalesArea3);

var animalesArea1 = [];
var animalesArea2 = [];
var animalesArea3 = [];

//Guardar en Areas
animalesArea1.push(oso, lobo);
animalesArea2.push(aguila, cuervo);
animalesArea3.push(tortuga);

// Estos son los parametros que se van a ir añadiendo dentro de Animal
var oso = new animal("Osos", "2012", "Buena", "Alemania");
var aguila = new animal("Aguilas", "2015", "Normal", "Portugal");
var cuervo = new animal("Cuervos", "2010", "Mala", "EEUU");
var tortuga = new animal("Tortugas", "2001", "Regular", "Brasil");
var lobo = new animal("Lobos", "2003", "Excelente", "Rusia");

var areas = [];
areas.push(mamiferos);
areas.push(aves);
areas.push(reptiles);

// Añado las areas a los zoo
zooMadrid.addArea(mamiferos);
zooMadrid.addArea(aves);
zooMadrid.addArea(reptiles);


document.write("<h1>Información de los Zoologicos</h1>");
document.write("Las instalaciones de " + zooMadrid._nombrezoo + " se encuentran en "
                 + zooMadrid._ubicacion + " su aforo es de " + zooMadrid._aforomax 
                 + " personas " + " y su horario es de " + zooMadrid._horario + "<br><br>");

document.write("Las instalaciones de " + zooBarcelona._nombrezoo + " se encuentran en "
                 + zooBarcelona._ubicacion + " su aforo es de " + zooBarcelona._aforomax 
                 + " personas " + " y su horario es de " + zooBarcelona._horario);  


document.write("<h2>Los animales estan clasificados por: </h2>");

//Mamiferos
document.write("Los " + mamiferos._nombredearea + " " + mamiferos._descripcion + ": " + "<br>" + "<br>")
    document.write("-Los " + oso._nombreanimal + " nacieron en " + oso._fechanacimiento
                     + " tienen una salud " + oso._salud + " y son de " + oso._paisdeorigen + "<br>")

    document.write("-Los " + lobo._nombreanimal + " nacieron en " + lobo._fechanacimiento
                     + " tienen una salud " + lobo._salud + " y son de " + lobo._paisdeorigen + "<br>" + "<br>" + "<br>")

//Aves
document.write("Los " + aves._nombredearea + " " + aves._descripcion + ": " + "<br>" + "<br>")
    document.write("-Las " + aguila._nombreanimal + " nacieron en " + aguila._fechanacimiento
                    + " tienen una salud " + aguila._salud + " y son de " + aguila._paisdeorigen + "<br>")

    document.write("-Los " + cuervo._nombreanimal + " nacieron en " + cuervo._fechanacimiento
                    + " tienen una salud " + cuervo._salud + " y son de " + cuervo._paisdeorigen + "<br>" + "<br>" + "<br>")

//Reptiles
document.write("Los " + aves._nombredearea + " " + aves._descripcion + ": " + "<br>" + "<br>")
    document.write("-Las " + tortuga._nombreanimal + " nacieron en " + tortuga._fechanacimiento
                    + " tienen una salud " + tortuga._salud + " y son de " + tortuga._paisdeorigen + "<br>")

    


                           