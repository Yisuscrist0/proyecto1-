const prompt = require("./questionAsync.cjs");

menu = async function(){
    opcion = await prompt("¿Que desea hacer? [1-suma, 2-resta, 3-multiplicacion, 4-division, 5-potencia]");

    return opcion;
}

module.exports = menu;