/*
 1. Implementa una función que simule la consulta a una base de datos para obtener información
de un usuario por su ID. Usa setTimeout para simular la demora de la operación y utiliza un
callback para devolver el resultado. 
 */
function consultarById(id, callback) {
    const data_base = {
        1 : { id : 1 , nombre : `miguelon`},
        2 : { id : 2 , nombre : `marcos`},
        3 : { id : 3 , nombre : `daniel`}
    }

    setTimeout(() => {
        const persona = data_base[id];
        
        if (persona){
            return callback(null, persona);
        }else{
            return callback(new Error("No se ha encontrado de manual", null));
        }

    },1000)
}

consultarById(1, (error, persona) => {
    if (error){
        console.error(error.mesagge);
    }
    else{
        console.log("Nombre de la persona --> " + persona.nombre);
        
    }

});