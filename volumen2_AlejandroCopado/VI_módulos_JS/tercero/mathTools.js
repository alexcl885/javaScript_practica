export default function calculate(operation, a , b){
    switch (operation) {
        case "sum":
            return sum(a,b);
            break;
    
        case "subtract":
            return subtract(a,b);
            break;
        case "multiply":
            return multiply(a,b);
            break;
        default:
            return "Te has equivocado maquina al escribirlo";
    }
}
export function sum(a,b) {
    return a+b;
}
export function subtract(a,b) {
    return a-b;
}
export function multiply(a,b) {
    return a *b ;
}