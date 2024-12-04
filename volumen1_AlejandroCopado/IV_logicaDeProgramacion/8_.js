//Crea una función que debe retornar verdadero si alguno de los elementos de un array está re‑
//petido n veces.
function devolverNVeces(array, numero) {
    let contador = 0
    for (let index = 0; index < array.length; index++) {
        for (let j = index + 1; j < array.length; j++) {
            if (array[index] === array[j]){
                contador++;
            }
            
        }
        
    }
    if (contador === numero){
        return true
    }
    else{
        return false
    }
}

console.log(devolverNVeces([1,2,2,4,5,2],3));
