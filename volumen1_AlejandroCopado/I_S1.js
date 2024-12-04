//PRIMER EJERCICIO

/*
let cadena_multi = "Buenas  \
Alejandro";
console.log(cadena_multi);*/

//SEGUNDO EJERCICIO

/*
let cadena_with_escape = "Esta linea contiene un espacio:\tEsta linea tiene un tabulador.\n Segunda línea con retorno de carro"
console.log(cadena_with_escape)
*/

//TERCER EJERCICIO

/*
let cadena_including = "Esta linea contiene un espacio:\tEsta linea tiene un tabulador \r Este es el retorno de carro \. anadiendo caracter"
console.log(cadena_including)
*/

//CUARTO EJERCICIO
/*
let cadena_concat = "Esta linea contiene un espacio:\tEsta linea tiene un tabulador \r Este es el retorno de carro \. anadiendo caracter"
let cadena_plus = "Cadena concatenada"
console.log(cadena_concat + cadena_plus)
*/
//QUINTO EJERCICIO

/*
let cadena1 = "holi";
let cadena2 = "Alex";
console.log("La cadena" +` ${cadena1}` + ` ${cadena2}`);
*/

//SEXTO EJERCICIO
/*
let ar = "Cadenilla bonita"
let arraylist = ar.split(" ");
console.log(arraylist)
*/

//OCTAVO EJERCICIO
/*
let conv_minus = "miguelon";
console.log(conv_minus.toLowerCase());
*/

//OCTAVO EJERCICIO
/*
let conv_mayus = "miguelon";
console.log(conv_mayus.toUpperCase());
*/

//NOVENO EJERCICIO
/*
let recorre = "cadenita"
for (let i=0;i<recorre.length;i++) {
    console.log(recorre.charAt(i));
    
}
*/

//DECIMO EJERCICIO
/*
let texto = "marco haber si nos sacamos la L";
let palabras = texto.split(" ");

for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] === "marco") {
        console.log("Correcto: " + palabras[i]);
    }
}*/

//UNDECIMO EJERCICIO
/*
let cad_sub = "alejandro";
console.log(cad_sub.substring(3));
*/

//DUODECIMO EJERCICIO
/*
let cad_sub = "alejandro";
let letra = "j"
console.log(cad_sub.substring(3,letra));
*/

//DECIMOTERCERO EJERCICIO
/*
let tex = "my name is alejandro"
console.log(tex.replaceAll(" ", "-"))
*/

//DECIMOCUARTO EJERCICIO
/*
let text_con_espacion ="   my name is miguelon   ";
let text_sin_espacios = text_con_espacion.trim(); //eliminamos los espacios del inicio y al final
console.log(text_sin_espacios);
*/
//DECIMOQUINTO EJERCICIO
/*
let textConEspacios = "    my name    is    miguelon   "
let texWS = textConEspacios.replace(/\s/g, "");
console.log(texWS);
*/
//DECIMOSEXTO EJERCICIO
/*
function inverCadena(text){
    return text.split("").reverse().join("");
}
let textInvertido = inverCadena("Texto invertido");
console.log(textInvertido);
*/
//DECIMOSEPTIMO EJERCICIO
/*
let cad = "mi carro me lo robaron";
let pattern = /[0-9]/
console.log(pattern.test(cad));
*/
//DECIMOOCTAVO EJERCICIO
/*
let cad = "mi carro me lo robaron.";
let pattern = /.*[.]/
console.log(pattern.test(cad));
*/
//DECIMONOVENO EJERCICIO
/*
let cad = "Mi carro me lo robaron";
let pattern = /[A-Z].*/;
//console.log(pattern.test(cad));


//VIGESIMO EJERCICIO
/*
let cad = "mi carro me lo robaron y mi numero es : +34 234 789 990";
let pattern = /\+\d{1,3}\s\d{3}\s\d{3}\s\d{3}/
console.log(pattern.test(cad));
*/

//VIGESIMO PRIMER EJERCICIO
/*
let cad = "mi carro me lo robaron y mi numero es : +34 234 789 990";
let textoConCodigoSecreto = cad.replace(/\+\d{1,3}/g, "SECRETO");
console.log(textoConCodigoSecreto);
*/




















