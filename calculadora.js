/* const opciones = require("./index.js");
const numeros = require("./index.js"); */
const sumar = require("./suma.js");
const resta = require("./resta.js");
const multiplicar = require("./multiplicar.js");
const dividir = require("./dividir.js");
const potencia = require("./potencia.js");

calculadora = function(numeros, opcion){
    let resultado = 0;
    let num1 = Number(numeros[0]);
    let num2 = Number(numeros[1]);
    switch(opcion){
        case "1":
            resultado = sumar(num1, num2);
            break;
        case "2":
            resultado = resta(num1, num2);
        break;
        case "3":
            resultado = multiplicar(num1, num2);
        break;
        case "4":
            resultado = dividir(num1, num2);
        break;
        case "5":
            resultado = potencia(num1, num2);
        break;
        default:
            console.log("No hay una operacion asociada a la opcion seleccionada");
    }

    console.log(`Su resultado es ${resultado}`)
}

module.exports = calculadora;