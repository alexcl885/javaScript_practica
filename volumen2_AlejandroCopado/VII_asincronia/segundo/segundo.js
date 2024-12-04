/*
2. Toma la función del ejercicio anterior 
y reescríbela utilizando Promesas en lugar de callbacks.
*/

function consultarById(id) {
    const data_base = {
        1: { id: 1, nombre: `miguelon` },
        2: { id: 2, nombre: `marcos` },
        3: { id: 3, nombre: `daniel` }
    }

    const promesa_persona = new Promise((response, error) => {
        let persona = data_base[id];
        if (persona) {
            response(persona.nombre)
        } else {
            error(new Error("No se ha encontrado de manual"));
        }
    });

    promesa_persona
        .then(usuario => {
            console.log("El nombre del usuario -> "+usuario);
        })
        .catch(error => {
            console.error(error);
        })

}

consultarById(1);