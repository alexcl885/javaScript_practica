const arrayCadenas = ["hola", "me llamo", "miguelon"];

//mediante el metodo filter
function filtrarCadenas(arr,n) {
    return arr.filter(cadena => cadena.length < n);   
}
console.log(filtrarCadenas(["Hola","miguelonwfa", "hafa"], 10));

