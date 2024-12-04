//Crea una función que elimine de una cadena los caracteres dados en un array
function cadenaSinCaracteres(cadena, parametros) {
    return cadena.split('').filter(cadena => !parametros.includes(cadena)).join('')
    
}
console.log(cadenaSinCaracteres("miguelon",["e","n"]));
