//Crea una función que determine si los paréntesis presentes en una cadena de texto están balan‑
//ceados. Por ejemplo (a(b)) → Balanceado, (a(b(a)) → No balanceado.

//(texto(texto2)) true
//(texto(tex(texto2)) false
function estanBalanceados(cadena) {
    const resultado = [];
    for(let caracter of cadena){
        if (caracter === "("){
            resultado.push(caracter);
        }
        else if (caracter === ")"){
            if (!resultado.length){
                return false
            }
            resultado.pop();
        }
        
    }   
    return resultado.length === 0;
}

console.log(estanBalanceados("(a(b(b))"));
console.log(estanBalanceados("(a(b))"));
