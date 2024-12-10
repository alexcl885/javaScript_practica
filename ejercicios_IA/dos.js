const objeto_persona = {
    dni : "1234565G",
    nombre: "Alejandro",
    apellidos: "Copado Lopez",
    edad: 19
}

const obj_seri = JSON.stringify(objeto_persona);
console.log(obj_seri);

const obj_desi = JSON.parse(obj_seri);
console.log(obj_desi);

for (const element in obj_desi) {
    console.log(`${element} : ${obj_desi[element]}`);
    
}
const {nombre, dni} = obj_desi;
console.log(nombre);
console.log(dni);

const generarArray = (tam) => {
    const array = new Array(tam).fill();
    for (let key =0; key< array.length; key++) {
        array[key] = Math.floor(Math.random()*50);
    }
    return array;
}

const [primero, segundo, ...resto] = generarArray(10);

console.log(primero);
console.log(segundo);
console.log(resto);





