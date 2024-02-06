
import sumar from "./suma.js";
import resta from "./resta.js";
import multiplicar from "./multiplicar.js";
import dividir from "./dividir.js";
import potencia from "./potencia.js";

calculadora = function(numeros, opcion){
    let resultado = 0;
    switch(opcion){
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
        case "5":
            resultado = potencia(numeros[0], numeros[1]);
        break;
        default:
            console.log("No hay una operacion asociada a la opcion seleccionada");
    }

    console.log(`Su resultado es ${resultado}`)
}

export default calculadora;