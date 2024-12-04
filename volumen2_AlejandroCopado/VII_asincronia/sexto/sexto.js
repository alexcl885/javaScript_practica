/**
 * 6. Escribe una función que realice múltiples peticiones HTTP usando fetch para obtener datos de
varios usuarios de GitHub a la vez. Usa Promise.all para esperar a que todas las peticiones se
completen.
 */

async function consultarApisGitHubs(nombres) {
    try {
        // mapeo cada nombre a una promesa de `fetch` y retorno cada persona
        const promises = nombres.map(usuario =>
            fetch(`https://api.github.com/users/${usuario}`).then(response => response.json())
        );

        // se una promise.all para esperar todas las promesas de fetch.
        const usuarios = await Promise.all(promises);
        
        console.log(`GitHub ->`, usuarios);
    } catch (error) {
        console.log("Error al consultar las APIs de GitHub:", error);
    }
}


consultarApisGitHubs(['alexcl885', 'marcosarjonaa']);
