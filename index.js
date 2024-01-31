const prompt = require("./questionAsync.cjs");

async function main()
{

    console.log("Esta es una calculadora");

    let numeros = [
        await prompt("Ingresa número 1: "),
        await prompt("Ingresa número 2: "),
    ]

    let opciones = await prompt("Ingresa el tipo de operacion");
    
    console.log([numeros, opciones]);
}

main();