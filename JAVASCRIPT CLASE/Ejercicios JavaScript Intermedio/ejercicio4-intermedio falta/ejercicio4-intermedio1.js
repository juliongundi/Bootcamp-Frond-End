class Tienda {
    //Aqui creamos la lista base que luego le meteremos detalles
    constructor(nombre, producto, empleados, horario, clientes) {
        this._nombre = nombre;
        this._producto = producto;
        this._empleados = empleados;
        this._horario = horario;
        this._clientes = clientes;
        this._empleados = [];
        this._clientes = [];
    }
    addPersonas(personas, clientes) {
        this._empleados.push(personas);
        this._clientes.push(clientes);
    }
    
}

