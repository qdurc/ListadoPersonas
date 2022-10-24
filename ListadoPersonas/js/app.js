const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Lara')
]

function mostrarPersonas234(){
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById('persona').innerHTML = texto;
}

function agregarPersonas(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
}

function crearListaPersona(persona){
    const lista = document.createElement('li');
    lista.innerHTML = `${persona.nombre} ${persona.apellido}`
    lista.onclick = function(){
        personas = personas.filter(x => x !== persona)
        mostrarPersonas()
    }
    return lista
}

