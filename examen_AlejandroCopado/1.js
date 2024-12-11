/*1*/ 
const generarCadena = (tam, array) => {
    let cadena = ""
    for (let i = 0; i < tam; i++) {
        let numRandom = Math.floor(Math.random()*4);
        cadena += array[numRandom];
    }
    return cadena;
}
const array = ["a", "b", "c", "d"];

const arrayCadenas = [];

for (let i = 0; i < 50 ; i++) {
    let numRandom = (Math.floor(Math.random()*10 +10));
    arrayCadenas.push(generarCadena(numRandom, array))
    
}
console.log(arrayCadenas);

/*B*/

const funcionMap = arrayCadenas.map((cadena) => {

    return cadena.toUpperCase()
})
console.log(funcionMap);

/*C */

const arrayTamano = arrayCadenas.map((cadena) => {
    return cadena.length
})
console.log(arrayTamano);

/*D */

const filtradoA = arrayCadenas.filter((cadena) => {
    return cadena.startsWith("a");
})
console.log(filtradoA);

/*E */

const copia = {...arrayCadenas}
console.log(copia);

/**F */

const [cad1, cad2,cad3, ...resto] = arrayCadenas

console.log(`PRIMERO: ${cad1}`);
console.log(`SEGUNDO: ${cad2}`);
console.log(`TERCERO: ${cad3}`);
console.log(`RESTO: ${resto}`);

