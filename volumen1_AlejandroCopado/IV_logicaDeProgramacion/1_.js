//crea una función que cuente el número de vocales de una cadena de caracteres.
function  cuentaVocales(cadena) {
    let count = 0;
    const vocales = "aeiouAEIOU";
    for (let vocal of vocales){
        if (cadena.includes(vocal)){
            count++;
        }
    }
    return count
}

console.log(cuentaVocales("miguelonaAOU"));
