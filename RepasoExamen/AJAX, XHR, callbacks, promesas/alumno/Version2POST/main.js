
//ESTA VERSION RECOGEMOS PERSONA JSON GENERADA POR EL CLIENTE  ATRAVES DE PHP://INPUT
//EN EL ARCHIVO PHP://INPUT

function recogerDatos() { //funcion para obtener los datos de form
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const profesion = document.getElementById("profesion").value;

    const persona = {
        nombre: nombre,
        apellido: apellido,
        profesion: profesion
    }
    /*
    const persona = { nombre, apellido, profesion };

    */



    const personaJson = JSON.stringify(persona);
    return personaJson;

    /*
    1.Recogemos los datos del formulario 
    2.Esos datos lo convertimos en un objeto
    3.Ese objeto lo convertimos en una cadena de JSON
   */

}

function peticion(url, data, gestionarRespuesta) { //la peticion  HTTP que vamos a hacer, pasando la url, los datos y una funcion 
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            gestionarRespuesta(xhr) // esta vez la callback es la funcion peticion
            console.log(`${xhr.status} - ${xhr.statusText}`);
        } else {
            console.log(`Error: ${xhr.status} - ${xhr.statusText}`)
        }




    });

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json"); // Establece el tipo de contenido
    xhr.send(data); // Enviamos los datos en formato JSON


}


function enviarDatos() {
    const personaJson = recogerDatos();
    const data = personaJson;
    console.log(data)
    peticion(`guardarPersonas.php`, data, xhr => { // igual, utilizamos una funcion anonima 
        console.log(`${xhr.responseText}`)// obtengo los datos reales del servidor
    });


}


document.getElementById("personaForm").addEventListener("submit", (e) => {
    e.preventDefault();
    enviarDatos();
})

/*
aqui el funcionamiento es parecido que al de get, pero los datos a enviar se envian en el cuerop de la solicitud y no en la url , 
por ello va ser otro parametro mas a la hora de llamar a la funcion peticon, donde le pasaremos la url, los datos
y la callback que gestiona la respuesta

*/