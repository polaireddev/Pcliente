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

function peticion(url, gestionarRespuesta) { 
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            gestionarRespuesta(xhr)
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
    peticion(`guardarPersonas.php?persona=${encodeURIComponent(personaJson)}`, xhr => { // en este caso le pasamos una¡¡funcion anonima!! 
        console.log(`${xhr.responseText}`)
    });


    /* 1. ¡¡La funcion anonima!! podrimaos haberla declarado tanto fuera como dentro de enviar datos y luego llamarla por su nombre,y su sintaxis no es mas q esto:
let  gestionarRespuesta = (xhr) => {
    console.log(`Respuesta del servidor: ${xhr.responseText}`);


    2. Tambien podriamos haber declarado la funcion gestionarResuesta y llamarla simplemente (tanto fuera como dentro de envairDatos)
    function gestionarRespuesta(xhr) {
        console.log(`Respuesta del servidor: ${xhr.responseText}`);
    }
};*/
}

document.getElementById("personaForm").addEventListener("submit", (e) => {
    e.preventDefault();
    enviarDatos();
})

/*en resumen le pasamos una url y una funcion gestionarRespuesta,
de esta forma, primero vamos a controlar la peticion, visualizando ha habiado exito o no,
en caso de q haya habido exito llamamos a la funcion gestionarRespueta, la cual esta definida directamente al ser llamada como una funcion anonima
pero podriamos haberlo hecho como hemos dicho antes, simplemente declarandola fuera y llamandola en enviar datos > peticion(url, gestionarRespuesta)

*/