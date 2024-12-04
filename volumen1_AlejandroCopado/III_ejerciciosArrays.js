        //a) array vacio
/*
let array = []
*/

        //b) Añade a “datos” los números del 1 al 50 con un bucle for.
/*
let array =  [];

for (let i = 0; i<= 50; i++) {
    array.push(i)
}
//console.log(array);
*/
        //c) Elimina los elementos del 25 al 50 asignando un nuevo tamaño a la propiedad length.

/*
array.length = 25

console.log(array);
*/

        //d) Usa el operador spread para hacer una copia del array anterior

/*
const arraySpread = [...array]
console.log(arraySpread);
*/
        //e. Crea un array de tamaño 50 con el constructor Array.

/*
let array = new Array()
array.length = 50
console.log(array);
*/

        //f. Copia el array anterior a otro con la factoría from.
/*        
const arrayCopiado = Array.from(array);
console.log(arrayCopiado);
*/
        
        //g. Crea un array multidimensional de 10 filas (i) y 10 columnas (j). Inicializa cada celda con el valor i*j.
/*
const multiArray = Array(10).fill().map(() => Array(10).fill());

for (let i = 0; i<10 ; i++){
    for (let j = 0; j<10;j++){
        multiArray[i][j] = i+j
    }
}
console.log(multiArray);
*/
        //h. Crea un array con la factoría of con los números del 1 al 5. Después, añade un elemento en la
        //posición 10 y otro en la 50. Recorre el array con un for imprimiendo los valores, y después con
        //forEach. ¿Cuál es la diferencia? ¿Cuál es el tamaño del array?
/*
array = Array.of(1,2,3,4,5)
console.log(array);

array[10] = 10
array[50] = 50
//LA diferencia es que el foreach muestra solo los valores que se encuentran en el array

array.forEach(element => {
    console.log(element);    
});
console.log("-------------------------");
*/
//y con el for muestra el array con todas las posiciones incluso los indefinidos
/*
for (let key of array){
    console.log(key);   
}
console.log("------------------------");
*/

            //i. Elimina dos elementos con delete.
/*
delete array[2]
delete array[6]
*/
        //k. Cada elemento x del array “datos” debe cambiarse por x*x. Usa forEach.
/*
array.forEach((element, index) => {
    array[index] = element * element       
});
console.log(array);
*/
        //l. Crea un nuevo array con map recorriendo cada elemento x de “datos”, donde cada elemento
            //sea un string “El valor es: x”. Usa template strings.
/*
let newArrayWithMap = array.map((valor)=> `Es: " + ${valor}` )  
*/
        //m. Crea un nuevo array mediante map que incremente cada elemento de “datos” en 5 unidades.
/*
let arr = [10,20,30,40,50,60]

let newArray = arr.map((valor) => valor + 5)
console.log(newArray);
*/

            //n. Mediante filter, quédate con los números impares en un nuevo array impares
/*
let arr = [11,12,23,37,46,51,60]
let arrayImpares = arr.filter((valor) => valor % 2 != 0)
console.log(arrayImpares);
*/
            //o. Usa find para buscar el número 13
/*            
let arr = [11,12,13,23,37,46,51,60]
let arrayFind = arr.find((valor) => valor === 13)
console.log(arrayFind);
*/

            //p. Usa every para comprobar si todos los números son positivos
/*            
let arr = [11,-12,13,-23,37,-46,51,60]
let sonPositivos = arr.every((valor) => valor >= 0)
console.log("Los elementos son positivos: "+sonPositivos);
*/

            //q. Calcula la sumatoria del array “datos” mediante reduce.
/*
let arr = [11,-12,13,-23,37,-46,51,60]
let arrayReduce = arr.reduce((suma, valor) => suma += valor,0 )
console.log(arrayReduce);
*/
                //r. Calcula el valor más pequeño del array mediante reduce.
/*                
const multiArray2 = Array(10).fill().map(() => Array(10).fill());

for (let i = 0; i<10 ; i++){
     for (let j = 0; j<10;j++){
        multiArray2[i][j] = i+j
        }
}                
let minimo = multiArray2.reduce((min, valor) => (valor < min ? valor : min), multiArray2[0]);
console.log(minimo);
*/

        //s. Usa flat para aplanar el array multidimensional que creaste anteriormente.
/*
let multiFlat = multiArray2.flat();
console.log(multiFlat);
*/
        // t. Tenemos la cadena: "Vamos a usar flatMap. Es igual que map. Pero aplana los arrays".
        //Separa mediante split las distintas frases. Después mediante map quita los espacios
        //sobrantes (trim). A continuación usa flatMap para extraer todas las palabras de cada
        //frase en un único array.
/*
let cadena = "amos a usar flatMap. Es igual que map. Pero aplana los arrays";

let ary = []
let palabras = cadena.split(". ");
const flattt = palabras.flatMap((palabras) => palabras.trim().split(" "));
console.log(flattt);
*/

        //u. Crea el array a = [1,2,3,4,5] y b = [6,7,8,9,10] con literales. Concatena los arrays a y b con concat.
        //Después, usa el operador spread. Crea una variable const cola. Usa unshift y shift para añadir y
        //quitar elementos. Dado el array resultante de la concatenación de a y b, obtén el subarray desde
        //el índice 2 hasta el penúltimo elemento (slice). Usa splice para quitar los 2 últimos elementos
        //de un array
/*
const a = [1,2,3,4,5] ;
const b = [6,7,8,9,10] ;
const arraysConcatenados =a.concat(b);
const spreadArray = [...a, ...b]
const cola = [...arraysConcatenados]
cola.unshift(0);
console.log(cola);

cola.shift(1);
console.log(cola);

let sArray = spreadArray.slice(2, spreadArray.length - 1);
sArray.splice(sArray.length - 2, 2);
*/

                // v. Rellena con fill un array de 100 elementos con -1.
/*
let rellenarArray = new Array(100).fill(-1)
console.log(rellenarArray);
*/
                // w. Crea un array de cadenas. Busca con indexOf una cadena.
/*
let cadenas = ["primero", "segundo", "tercero", "cuarto", "quinto"]
let cadIndex = cadenas.indexOf("cuarto");
console.log(cadIndex);
*/
                // x. Comprueba si la cadena "hola" está dentro del array anterior
/*
let comprobacion = cadenas.includes("hola");
console.log(comprobacion);
*/
                // y. Ordena la lista de cadenas anterior de forma alfabética con sort
/*  
let cadenas = ["primero", "segundo", "tercero", "cuarto", "quinto"]
let listaOrdenada = cadenas.sort();
console.log(listaOrdenada);
*/
                // z. Crea un array vacío de 50 posiciones. Con forEach asigna valores aleatorios entre 0
                //y 100. Después ordena con sort de menor a mayor. Cambia y ordena de mayor a menor.
/*
let newArray = new Array(50).fill(1);

newArray.forEach((a,element) => {
        newArray[element] = Math.floor(Math.random() * 100);
});
newArray.sort((i,o) => i-o)
console.log(newArray);

newArray.sort((i,o) => o-i)
console.log(newArray);
*/
                // aa. Usa reverse para invertir el array anterior.
/*
console.log(newArray.reverse());
*/