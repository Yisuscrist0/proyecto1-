potencia = function (num1, num2){
    let memoria = num1;
    for (let i = 1; i < num2; i++) {
        memoria = memoria * num1;
    }
    return memoria;
}

module.exports = potencia;