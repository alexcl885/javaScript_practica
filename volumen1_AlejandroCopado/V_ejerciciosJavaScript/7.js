
function vocalesConsonantes(texto){
    let vocales = 0
    let consonantes = 0
    let letrasV = "aeiouAEIOU"
    for (let i =0; i< texto.length; i++){
        if (letrasV.includes(texto[i])){
            vocales++;
        }
        else{
            consonantes++;
        }
    }
    return {vocales, consonantes};
}

const text = "Me llamo miguelon";
const {vocales, consonantes} = vocalesConsonantes(text)
console.log(`Vocales = ${vocales} Consonantes = ${consonantes}`);
