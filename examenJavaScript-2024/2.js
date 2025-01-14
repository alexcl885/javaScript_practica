/*A */
const padre = {
    nombre : "Alejandro",
    apellidos : "Copado Lopez"
}
/**B */
const hijo = {
    nombre : "Marcos",
    apellidos : "Arjona",
    edad : 19,
    altura : 145
}

/**C*/
console.log("HIJO:");

for (const key in hijo) {
    console.log(`${key} = ${hijo[key]}`);
}
console.log();
console.log("PADRE:");

for (const key in padre) {
    console.log(`${key} = ${padre[key]}`);
}

console.log();

/**D */
const libro = {
    isbn: 1234,
    titulo: "En busca del aprobado perdido",
    paginas : 424,
    descripcion : "Un bonito libro por el cual te llevara a aprobar Desarrollo de Interfaces"
}
const {isbn, paginas} = libro;
console.log("Isbn ->",isbn);
console.log("Paginas ->",paginas);

/**E */
const arrowFuncion = (libro, debug = true) => {
    const {titulo, descripcion} = libro;
    console.log("Titulo ->", titulo);
    if (debug){
        console.log("Descripcion->", descripcion);
    }
}
console.log();

console.log("Debug con true=>>>>>>>>>>>");
arrowFuncion(libro, true);
console.log("-------------");
console.log("Debug con false=>>>>>>>>>>>");
arrowFuncion(libro, false);


