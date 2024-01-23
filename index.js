console.log("chaval");










int const nextInt = scanner.nextInt;
opcion = nextInt();
double resultado = 0;

switch (opcion) {
    case 1:
        resultado = sumar(num1, num2);
        break;
    case 2:
        resultado = restar(num1, num2);
        break;
    case 3:
        resultado = multiplicar(num1, num2);
        break;
    case 4:
        resultado = dividir(num1, num2);
        break;
    default:
        System.out.println("Opción inválida.");
        return;
}