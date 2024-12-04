//Crea una función que rote los elementos de un array n posiciones. Por ejemplo, dado el array
//[1,2,3,4,5,6] y el número 2 el resultado será: [5,6,1,2,3,4]

function rotarWithSlice(array, numero) {
    return array.slice(-numero).concat(array.slice(0, -numero));
    }
console.log(rotarWithSlice([1,2,3,4,5],2));


