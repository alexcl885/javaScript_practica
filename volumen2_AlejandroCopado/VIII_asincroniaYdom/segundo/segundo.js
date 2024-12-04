/**
 * 2. Implementa los siguientes apartados.
a. Crea un objeto Javascript con las propiedades dni, nombre, apellidos y edad con valores
inventados. Serializa el objeto a json y después deserializalo.
b. Recorre el objeto con un bucle imprimiendo sus propiedades y valores.
c. Crea una función que desestructure la propiedad nombre y dni y los imprima en consola.
d. Crea una función arrow con el parámetro tam que genere un array de números aleatorios
de 0 a 100 de tamaño tam. Llama a la función y desestructura el primer y segundo elemento
 * 
 */

const person = {
    dni: "1234567G",
    nombre: "Marco",
    apellidos : "Arjona",
    edad : 19
}
const objeto_serializado = JSON.stringify(person);
console.log("SERIALIZADO");
console.log(objeto_serializado);

const objeto_deserializado = JSON.parse(objeto_serializado);
console.log("DESERIALIZADO");
console.log(objeto_deserializado);

/*--------------------------------------*/

console.log();
console.log("Bucle for->");
for (let elemento in objeto_deserializado) {    
    console.log(`${elemento} : `+objeto_deserializado[elemento]);  
}

/*---------------------------------------- */
console.log();
console.log("DESESTRUCTURACION ->");

function desestructuracion_nombreDNI(person) {
    const  {nombre, dni} = person
    console.log(nombre);
    console.log(dni);
}

desestructuracion_nombreDNI(person);

/**--------------------------------------- */
console.log();

console.log("FUNCION ARROW ->");

const funcion_arrow = (tam) =>{
    let array = []
    for (let i =0 ; i< tam; i++){
        let numero = Math.floor(Math.random()* 100)
        array.push(numero)
    }
    console.log(array);
    
    return array
}

const [primero, segundo, ...resto] = funcion_arrow(12);
console.log("Primer numero->"+primero);
console.log("Segundo numero->"+ segundo);
console.log("Resto ->" +resto);






