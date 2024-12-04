
function primeraPalabraMayuscula(cadena) {
    let resultado = ''
    for (let i = 0; i < cadena.length; i++) {
        if (i === 0) {
            resultado += cadena[i].toUpperCase()
        } else {
            resultado += cadena[i]
        }
    }
    return resultado
}


console.log(primeraPalabraMayuscula("hola"));
