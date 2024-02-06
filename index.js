const menu = require("./menu.js");
const ingesta= require("./ingesta.js");
const calculadora = require("./calculadora.js");


async function main()
{

    console.log("========= Esta es una calculadora ===========");

    let opcion = await menu();

    let numeros = await ingesta();

    calculadora(numeros,opcion)
}

main();