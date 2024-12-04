/**
 * 7. Escribe una función que intente hacer una petición con fetch, pero que reintente la operación
hasta 3 veces si falla. Implementa un pequeño retardo entre cada intento.
 */

function peticionFetch(url) {
    let intentos = 0;
    do {
        fetch(url)
            .then(response => {
                if (!response.status){
                    intentos++
                    console.log(`intento: ${intentos}`);
                }
                else{
                    intentos += 3
                    return response.json();
                }

            })
            .then(user => {
                console.log(`User ->  ${user.login}`);
                
            })
            .catch(error => {
                console.log("ERROR -> " + error.message);

            })
    } while (intentos == 3);
}
peticionFetch("https://api.github.com/users/alexcl885")