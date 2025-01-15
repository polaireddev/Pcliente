// get se pasan los datos a traves de la url


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



    const personaJson = JSON.stringify(persona); //recibimos un objeto JS y lo pasamos a JSON
    return personaJson;

    /*
    1.Recogemos los datos del formulario 
    2.Esos datos lo convertimos en un objeto
    3.Ese objeto lo convertimos en una cadena de JSON
   */

}

function peticion(url, callback) { //ña peticion  HTTP que vamos a hacer, donde 
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            callback(xhr)
            console.log(`${xhr.status} - ${xhr.statusText}`);
        } else {
            console.log(`Error: ${xhr.status} - ${xhr.statusText}`)
        }




    });

    xhr.open("GET", url);
    xhr.send();


}

function enviarDatos() {
    const personaJson = recogerDatos();
    peticion(`guardarPersonas.php?persona=${encodeURIComponent(personaJson)}`, xhr => {
        console.log(`${xhr.responseText}`)// obtengo los datos reales del servidor
    });
}


document.getElementById("personaForm").addEventListener("submit", (e) => {
    e.preventDefault();
    enviarDatos();
})

