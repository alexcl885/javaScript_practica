/*const filtrarGeneroMasculino = async () => {
    const response = await fetch("https://randomuser.me/api/?results=100");
    const usuarios = await response.json();

    for (const usuario of usuarios.results) {
        if (usuario.gender == "male"){
            console.log(usuario);
            
        }
    }
}*/
//filtrarGeneroMasculino();

const filtrarPersona = async (edad = 25) => {
    const response = await fetch("https://randomuser.me/api/?results=100");
    const usuarios = await response.json();

    const masculino = usuarios.results.filter(persona => persona.gender === "male");

    const array = masculino.map(personaMasculina => {
        return {
            "username" : personaMasculina.name.first,
            "fullname" : personaMasculina.name,
            "email" : personaMasculina.email,
            "age" : personaMasculina.registered.age
        }
    });
    //console.log(array);
    
    const mascu_encontrado = array.find(persona=> edad < persona.age);
    
    

    return mascu_encontrado;

}
filtrarPersona(3)
    .then(response => {
        console.log(response);
    })
    .catch(error => console.log(error))