import calculate, {sum, multiply, subtract} from "./mathTools.js";

let suma = sum(5,5);
let multiplicacion = multiply(5,5);
let resta = subtract(5,5);

let calcular = calculate("sum", 6, 6);
let calcular2 = calculate("multiply", 6, 6);
let calcular3 = calculate("subtract", 6, 6);

console.log(`La suma de los valores introducidos son -> ${suma}`);
console.log(`La multiplicacion de los valores introducidos son -> ${multiplicacion}`);
console.log(`La resta de los valores introducidos son -> ${resta}`);
console.log(`La suma del metodo calculate es  -> ${calcular}`);
console.log(`La multiplicacion del metodo calculate es  -> ${calcular2}`);
console.log(`La resta del metodo calculate es  -> ${calcular3}`);
