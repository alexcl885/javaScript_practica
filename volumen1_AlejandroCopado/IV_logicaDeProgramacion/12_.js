//Crea una función que rote una matriz de tamaño nxn, 90 grados a la derecha. Ejemplo: [1,2,3]
//[7, 4, 1] [4,5,6] => [8, 5, 2] [7,8,9] [9, 6, 3]

//ejercicio realizado en clase

function rotarMatriz(matriz) {
    let numeroParametros = matriz.length
    let result = [];
    for (let j = 0; j < matriz.length; j++) {
        for (let i = matriz.length -1; i >= 0; i--) {
            process.stdout.write(matriz[i][j]+ ' ');
        }
        console.log('');
        
    }
    return result;
    
}

const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(`Matriz rotada: `);

process.stdout.write(rotarMatriz(matriz).toString());

