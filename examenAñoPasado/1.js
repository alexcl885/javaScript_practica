/**
 * Crea una función arrow asíncrona con el parámetro edad, mediante
async/await, y carga los datos de https://randomuser.me/api/?results=100, después
mediante funciones de los arrays:
a. Filtra sólo las mujeres.
b. Genera un array nuevo con los campos username, full_name, email, age.
c. Busca al primer usuario, mujer, que tenga menos edad que el parámetro
dado y retorna el dato. El parámetro edad tiene valor por defecto 18.
d. Llama a la función en el ámbito global e imprime el resultado en consola.
e. Si ocurre un error imprimelo en consola.
 */

const arrow = async (edad= 18) => {
    try {
        const respuesta = await fetch('https://randomuser.me/api/?results=100');
        const usuarios = await respuesta.json();

        const mujeres = usuarios.results.filter((persona) => persona.gender == "female"); //me devuelve las mujeres
        
        const campos_mujeres = mujeres.map(mujer => ({
            username: mujer.login.username,
            full_name: `${mujer.name.first} ${mujer.name.last}`,
            email: mujer.email,
            age: mujer.dob.age
        }));
        
        
        const mujer_young = campos_mujeres.find(mujer => mujer.age < edad);
       
        console.log(mujer_young);
        
    } catch (error) {
        console.log(error);
    }
}
arrow(67);
