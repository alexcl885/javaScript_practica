//Busca una submatriz dentro de una matriz más grande. El resultado debe ser las coordenadas
//donde se encuentra dicha matriz.

//copiada historica de los apuntes (no lo entendia pero al mirarlo mas o menos si)

function enBuscaDeLaSubmatrizPerdida(matriz, submatriz) {
    const filasM = matriz.length;
    const columnasM = matriz[0].length;
    const filasS = submatriz.length;
    const columnasS = submatriz[0].length;
    for (let i = 0; i <= filasM - filasS; i++) {
        for (let j = 0; j <= columnasM - columnasS; j++) {
            let encontrada = true;
            for (let x = 0; x < filasS; x++) {
                if (matriz[i + x].slice(j, j + columnasS).toString() !== submatriz[x].
                    toString()) {
                    encontrada = false;
                    break;
                }
            }
            if (encontrada) {
                return { fila: i, columna: j };
            }
        }
    }
    return null;
}
const array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
const submatriz = [
    [6, 7],
    [10, 11],
    
];
console.log(enBuscaDeLaSubmatrizPerdida(array, submatriz));
