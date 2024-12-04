//Crea un array que intercale dos arrays dados. Por ejemplo dados [a,b,c,d] y [1,2,3,4] el resultado
//sería [a,1,b,2,c,3,d,4]

function intercalarArrays(arrayUno, arrayDos) {
    
    const resultado = [];
    for (let i = 0; i < arrayUno.length; i++) {
        resultado.push(arrayUno[i], arrayDos[i]);
    }
    return resultado;
}
let arrayUno = [1, 2, 3, 4]
let arrayDos = ["a", "b", "c", "d"]

console.log(intercalarArrays(arrayUno, arrayDos));
