/* aqui lo unico que cambia es el como enviamos los datos, ya que se envian el cuerpo de la solicitud*/

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

    const personaJson = JSON.stringify(persona); //objeto js -> json


    return personaJson;

    /*
    1.Recogemos los datos del formulario 
    2.Esos datos lo convertimos en un objeto
    3.Ese objeto lo convertimos en una cadena de JSON
   */

}


//Esto tambien es lo que cambia: pasando la url, los datos!!! y la callback// como hemos dicho los datos hay que pasarlos en el cuerpo de la solicitud
function peticion(url, data, gestionarRespuesta) { 
    let xhr = new XMLHttpRequest();

    xhr.open("POST", url); 
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //esto es lo q cambia, al ser Post hay q definir el tipo de contenido de los datos q va ser enviado en el cuerpo de la solicitud

    xhr.addEventListener("load", () => { // definimos como manejar la respuesta
        if (xhr.status == 200) {
            gestionarRespuesta(xhr) 
            console.log(`${xhr.status} - ${xhr.statusText}`);
        } else {
            console.log(`Error: ${xhr.status} - ${xhr.statusText}`)
        }

    });
    xhr.addEventListener("error", ()=>{ // por si la peticion falla
        console.log("Error en la peticion")

    })

    
    xhr.send(data); 


}

function enviarDatos() {
    const personaJson = recogerDatos();
    const data= `persona=${personaJson}`; // al ser un dato urlencoded hay q determinar el nombre del post que va recibir el archivo php
    peticion(`guardarPersonas.php`, data, xhr => {
        console.log(`${xhr.responseText}`)
    });
}


document.getElementById("personaForm").addEventListener("submit", (e) => {
    e.preventDefault();
    enviarDatos();
})

