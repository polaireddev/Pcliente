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

function peticion(url, data, callback) { //la peticion  HTTP que vamos a hacer, pasando la url, los datos y una funcion 
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            callback(xhr) // esta vez la callback es la funcion peticion
            console.log(`${xhr.status} - ${xhr.statusText}`);
        } else {
            console.log(`Error: ${xhr.status} - ${xhr.statusText}`)
        }




    });

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    xhr.send(data); 


}

function enviarDatos() {
    const personaJson = recogerDatos();
    const data= `persona=${encodeURIComponent(personaJson)}`; // al ser un dato urlencoded hay q determinar el nombre del post que va recibir el archivo php
    peticion(`guardarPersonas.php`, data, xhr => {
        console.log(`${xhr.responseText}`)// obtengo los datos reales del servidor
    });
}


document.getElementById("personaForm").addEventListener("submit", (e) => {
    e.preventDefault();
    enviarDatos();
})

