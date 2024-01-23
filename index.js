console.log("Esta es una calculadora");

args = process.argv.slice(2);
// Parametro 1: tipo de operacion; suma, resta, etc.
// Parametro 2: num1
// Parametro 3: num2

function isNumeric(value) {
    return /^\d+$/.test(value);
  }

if (args.length == 3) {
    
    for(i = 1; i < 3; i++){
        if(!isNumeric(args[i])){
            console.log(`No es un numero: ${args[i]}`);
        }
    }


    // Aqui ya puedo escribir la calculadora

    

}