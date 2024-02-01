const opciones = require("./index.js");
const numeros = require("./index.js");
const sumar = require("./suma.js");
const restar = require("./resta.js");
const multiplicacion = require("./multiplicar.js");
const dividir = require("./dividir.js");

calculadora = function(numeros, opciones){
    let resultado = 0;
    switch(opciones){
        case "1":
            resultado = sumar(numeros[0], numeros[1]);
            break;
        case "2":
            resultado = resta(numeros[0], numeros[1]);
        break;
        case "3":
            resultado = multiplicar(numeros[0], numeros[1]);
        break;
        case "4":
            resultado = dividir(numeros[0], numeros[1]);
        break;
        default:
            console.log("No hay una operacion asociada a la opcion seleccionada");
    }

    console.log(`Su resultado es ${resultado}`)
}

module.exports = calculadora;