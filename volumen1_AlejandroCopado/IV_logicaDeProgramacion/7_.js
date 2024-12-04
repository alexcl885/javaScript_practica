function tieneDuplicados(array) {
    let arrayDos = []
    for (let index = 0; index < array.length; index++) {
        for (let j = index+1; j < array.length; j++){
            if (array[index] === array[j]){
                return true;
            }
        }
        
    }
    return false
}

console.log(`Tiene duplicados -> ${tieneDuplicados([1,3,4,5,2,1])}`);
