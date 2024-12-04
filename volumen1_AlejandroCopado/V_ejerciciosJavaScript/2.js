//FACTORIAL DE UN NUMERO

function factorial(number){
    let result = 1
    for (let i = 2 ; i <= number;i++){
        result *= i
    }
    return result;
}
console.log("El factorial de 9 ->"+factorial(9));
