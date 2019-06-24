class Calculadora {
    constructor(){
        this.resultado = [];
    }
    sumar(n1, n2) {
        var total = parseInt(n1) + parseInt(n2);
        
        this.resultado.push(total);
        console.log(total);
        return total
    }
    restar(n1, n2) {
        var total = parseInt(n1) - parseInt(n2);
        this.resultado.push(total);
        return total
    }
    multiplicar(n1, n2) {
        var total = parseInt(n1) * parseInt(n2);
        this.resultado.push(total);
        return total
    }
    dividir(n1, n2) {
        var total = parseInt(n1) + parseInt(n2);
        this.resultado.push(total);
        return total
    }
    borrar() {
        this.resultado = [];
    }
}
let obj = new Calculadora();
obj.sumar(8,3);
obj.restar(8,3);
obj.multiplicar(8,3);
obj.dividir(8,3);
