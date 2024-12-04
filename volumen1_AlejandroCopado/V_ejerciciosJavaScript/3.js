//palabra que busque todas las ocurrencias de una palabra en un texto dado
//la funcion retorna un array con las posiciones encontradas

function buscarOcurrencias(palabra, texto){
    let arrayOcurrencias = [];
    let arrO = texto.indexOf(palabra);
    while (arrO !== -1){
        arrayOcurrencias.push(arrO);
        arrO = texto.indexOf(palabra, arrO + palabra.lenght)
    }
    return arrayOcurrencias
}

console.log(buscarOcurrencias("buenas", "buenas tardes me gusta el futbol"));
