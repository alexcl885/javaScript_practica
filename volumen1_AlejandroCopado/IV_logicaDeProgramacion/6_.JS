function contarLetras(cadena) {
    let arr = cadena.split("")
    let contador = 0;
    for (let index = 0; index < arr.length; index++) {
        contador++       
    }
    return contador-1
    
}
function contarPalabras(cadena) {
    let arr = cadena.split(" ")
    let contador = 0;
    for (let index = 0; index < arr.length; index++) {
        contador++       
    }
    return contador-1
}
function contarFrases(cadena) {
    let arr =  cadena.split(".");
    let contador = 0;
    for (let index = 0; index < arr.length; index++) {
        contador++       
    }
    return contador-1
}
const frase = "Me llamo miguelon. Me gusta ir a jugar al futbol con mis amigos porque es muy divertido.Me mola."
console.log(`LETRAS: ${contarLetras(frase)}`);
console.log(`PALABRAS: ${contarPalabras(frase)} `);
console.log(`FRASES: ${contarFrases(frase)}`);
