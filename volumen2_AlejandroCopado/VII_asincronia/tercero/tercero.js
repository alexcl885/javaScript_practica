/*
3. Usando la función del ejercicio anterior, obtén un usuario y luego realiza otra operación asincró‑
nica basada en los datos del usuario. Por ejemplo, obtener los pedidos de un usuario después
de obtener su información.
*/

function consultarById(id) {
    //Base de datos informal
    const data_base = {
        1: { id: 1, nombre: `miguelon`, pedidos: 21 },
        2: { id: 2, nombre: `marcos`, pedidos: 233 },
        3: { id: 3, nombre: `daniel`, pedidos: 544 }
    }

    //PROMISES
    const promesa_persona = new Promise((response, error) => {
        let persona = data_base[id];
        if (persona) {
            response(persona.nombre)
            response(persona.pedidos)
        } else {
            error(new Error("No se ha encontrado de manual"));
        }
    });

    promesa_persona
        .then(usuario => {
            console.log("El nombre del usuario -> " + usuario);
            return usuario;
        })
        .catch(error => {
            console.error(error);
        })
    //Con asincronite
    const con_Asincronia = async () => {
        const user = await data_base[id];
        try {
            const nºpedidos = await user.pedidos;
            console.log("El numero de pedidos de la persona es -> " + nºpedidos);
        } catch (error) {
            console.log("Error de manual");
        }
    }
    con_Asincronia();

}

consultarById(2);