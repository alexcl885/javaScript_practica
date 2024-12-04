/**
 * 1. Crea una función arrow asíncrona con el parámetro edad, mediante async/await, y carga los
datos de https://randomuser.me/api/?results=100, después mediante funciones de los arrays:
a. Filtra sólo las mujeres.
b. Genera un array nuevo con los campos username, full_name, email, age.
c. Busca al primer usuario, mujer, que tenga menos edad que el parámetro dado y retorna el
dato. El parámetro edad tiene valor por defecto 18.
d. Llama a la función en el ámbito global e imprime el resultado en consola.
e. Si ocurre un error imprimelo en consola.
 */

const fetchSyncMale = async (edad = 18) => { 
    const url = "https://randomuser.me/api/?results=100"
    try {
        const response = await fetch(url) //respuesta de la api
        const users = await response.json() //formateamos a json
        const female = users.results.filter(user => user.gender === 'female'); //filtro de los usuarios que son mujeres

        const array_mujeres = female.map(user => ({ //filtramos la informacion de las mujeres
            username: user.login.username,
            full_name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            age: user.dob.age
        }));

        const mas_joven = array_mujeres.find(user => user.age < edad); //filtramos la mas joven segun la edad pedida
        console.log(mas_joven);

    } catch (error) {
        console.log("Error al conectarse a la api", error);
    }
}


fetchSyncMale(28)


