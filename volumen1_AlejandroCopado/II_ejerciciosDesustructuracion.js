//a) Desestrucuracion de un array
/*
let array = ["06", "Octubre", "2021"];

const [dia, mes , año] = array
console.log(dia);
console.log(mes);
console.log(año);
*/
//b) array de numeros
/*
let arrNumber = [1,2,3,4,5,6,7,8]

const [,impar1, ,impar2, ,impar3, ,impar4] = arrNumber
console.log(`Números en posiciones impares: ${impar1}, ${impar2}, ${impar3}, ${impar4}`);
*/
//c)
/*
let array = [1,2,4,5,6,7,8]

const [primer, segundo, ...resto] = array
console.log(`Primero: ${primer} : ${segundo} : ${resto}`);
*/

//d)

const person = { nombre: 'Luis', apellidos: 'Molina', telefono: '+34666554433' };

const {nombre, apellidos, telefono} = person
console.log(`Variables : ${nombre} : ${apellidos} : ${telefono}`);


//e)Cambia el siguiente bucle para desestructurar cada entrada e imprimir llave y valor por separado
/*
const person = { nombre: 'Luis', apellidos: 'Molina', telefono: '+34666554433' };

for (const [key, value] of Object.entries(person)) {
    console.log(`Llave:${key}, Valor:${value}`);       
}
*/
//f)
/*
const puntos = [{ x: 1, y: 2 }, { x: 3, y: 4 }];
const [{ x: x1, y: y1 }, { x: x2, y: y2 }] = puntos
console.log(`Punto 1: (${x1}, ${y1}), Punto 2: (${x2}, ${y2})`);
*/
//g)
/*
function imprimirElNombreCompleto(objeto) {
    const {nombre, apellidos, ...resto} = objeto
    console.log(`El nombre y apellido es -> ${nombre} ${apellidos}`);
    
}

const objeto = {nombre: `Miguelon`, apellidos: `Copado Lopez`, edad: 18, direccion:`Avenida Andalucia`, cod_postal: 23400}
imprimirElNombreCompleto(objeto);
*/
//h)
/*
const primerObjeto = {x:0, y:1, z:2};
const segundoObjeto = {x1:3,x2:4,x3:5};

const dosEnUno = {...primerObjeto, ...segundoObjeto} 
const {z, ...sin} = dosEnUno
console.log(`Objeto dosEnUno sin el ${z}`, sin);
*/

//i
/*
function arrayTresValores() {
    const array = [22,23,233]
    return array    
}
for (key of arrayTresValores()){
    console.log(`Valor : ${key}`);    
}
*/
//j
/*
const objeto = {nombre:`Alejandro`,
    apellidos:`Copado Lopez`,
    datos:{
        hermanos:[`Esperanza`, `Miguelona`,`Sergio`],
        padres:['Francisco', `Maria Dolores`]
    }
}
const clonObjeto = JSON.parse(JSON.stringify(objeto));
console.log(`Clonacion-> `, clonObjeto);
*/

