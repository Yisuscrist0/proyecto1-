const prompt = require("./questionAsync.cjs");

ingesta = async function(){
    return [
        await prompt("Ingresa número 1: "),
        await prompt("Ingresa número 2: "),
    ];
}

module.exports = ingesta;
