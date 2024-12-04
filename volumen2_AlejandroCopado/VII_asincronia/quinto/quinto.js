/**
 * 5. Escribe una función que haga una petición a una API pública utilizando fetch y maneje la res‑
puesta. Por ejemplo, obtén los datos de un usuario de la API de GitHub.
MI API -> https://api.github.com/users/alexcl885
 */

function apiPublica(url) {
    fetch(url)
    .then(response => response.json()) 
    .then(user => {
        console.log(user)
        
    })
    .catch(error => error.message);
    
}
apiPublica("https://api.github.com/users/alexcl885");