//creamos el array con 1000 numeros aleatorios
const array = new Array(1000);

for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 100)

}
console.log("ARRAY CON 1000 NUMBERS: " + array);


//a)Calculo la media aritmetica

function mediaAritmetica(array) {
    let suma = 0
    for (let number = 0; number < array.length; number++) {

        suma += array[number]

    }
    return suma / array.length
}
console.log(`MEDIA ARITMETICA: ${mediaAritmetica(array)}`);




//b)calculamos la frecuencia de cada numero

function veces(array) {
    let frecuencias = Array(100).fill(0);
    array.forEach(num => {
        frecuencias[num]++;
    });
    return frecuencias;

}

console.log("BBBBBBBB ->" + veces(array));
console.log("---------------------------------------------------------");


//c)

function ordenarNormal(array) {
    let arrayOrdenado = []
    for (let numero = 0; numero < array.length; numero++) {
        for (num2 = numero + 1; num2 < array.length; num2++) {
            if (array[numero] > array[num2]) {
                let temp = array[numero];
                array[numero] = array[num2];
                array[num2] = temp;

            }
        }
    }
    return array;
}
console.log(`Ordenados normales: ${ordenarNormal(array)}`);

console.log("---------------------------------------------------------");

//d)Ordenamos con el sort

const ordenadoSort = array.sort();
console.log(`Numeros ordenados: ${ordenadoSort}`);

