//Crea una función que determine si una cadena es un palíndromo, es decir, que se lee igual hacia
//delante que hacia atrás



    function esPalindroma(cadena) {
      // Elimina espacios y convierte a minúsculas
      cadena = cadena.replace(/\s/g, "").toLowerCase();
      
      // Compara la cadena con su reverso
      return cadena === cadena.split("").reverse().join("");
    }
    
    // Ejemplo de uso:
    console.log(esPalindroma("radar")); // true
    console.log(esPalindroma("hola")); // false

function esCero(numero) {
  return numero === 0;
}

