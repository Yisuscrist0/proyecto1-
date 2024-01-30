ingresar = function(){
    var num1, num2;
    num1 = prompt("Ingresa un primer numero");
   
    num2 = prompt("Ingresa un segundo numero");
   
    return [num1, num2]; // Arreglo [0=>num1, 1 => num2]
}

export default ingresar;