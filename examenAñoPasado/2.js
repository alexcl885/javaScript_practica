/**
 * Crea un objeto Javascript con las propiedades dni, nombre, apellidos y edad
    dni y valores inventados. Serializa el objeto a json y después deserializalo.
 */
const objeto = {
    dni: "12345F",
    nombre: "Miguelon",
    apellidos: "Copado Lopez",
    edad : 19
}

const objeto_serializado = JSON.stringify(objeto);
console.log(objeto_serializado);

const objeto_deserializado = JSON.parse(objeto_serializado);
console.log("Objeto deserailizado -> "+objeto_deserializado.nombre);

/**
 * Recorre el objeto con un bucle imprimiendo sus propiedades y valores
 */
console.log();

console.log("VALORES DEL OBJETO");

for (let key in objeto_deserializado) {
    console.log(`${key} : ${objeto_deserializado[key]}`);
    
}

/**
 * Crea una función que desestructure la propiedad nombre y dni y los imprima
en consola.
 */

const {dni, nombre, apellidos, edad} = objeto_deserializado;

console.log(`Datos persona -> ${dni} : ${nombre} : ${apellidos} : ${edad}`);

/**
 * Crea una función arrow con el parámetro tam que genere un array de
números aleatorios de 0 a 100 de tamaño tam. Llama a la función y
desestructura el primer y segundo elemento y el resto en constantes
 */

const funcion_arrow = (tam) => {
    const array = new Array(tam).fill();
    for (let i = 0 ; i< array.length; i++){
        array[i] = Math.floor(Math.random()*100);
    }
    console.log(array);
    return array;
    
}

const [primero, segundo, ...resto] = funcion_arrow(10);
console.log(primero);
console.log(segundo);
console.log(resto);


