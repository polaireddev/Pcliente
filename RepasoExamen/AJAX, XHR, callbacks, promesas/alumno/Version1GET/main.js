document.getElementById("personaForm").addEventListener("submit", e =>{
    e.preventDefault();
    const personaJson = recogerDatos();
    gestionarPeticion(`guardarPersonas.php?persona=${encodeURIComponent(personaJson)}`, gestionarRespuesta);


    
})

function recogerDatos(){
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const profesion = document.getElementById("profesion").value;
    
    const persona = {
        nombre: nombre,
        apellido: apellido,
        profesion: profesion
    }


    return JSON.stringify(persona);

}


function gestionarPeticion(url, gestionarRespuesta){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload=()=>{
        if(xhr.status==200){
            console.log("Exito en la respuesta");
            gestionarRespuesta(xhr);
        }else{
            console.log("Error en la respuesta")
        }

    }
    xhr.onerror=()=>{
        console.log("Error en la peticion")
    }
    
    xhr.send();
}

function gestionarRespuesta(xhr){
    const objeto = JSON.parse(xhr.response);
    console.log(xhr.responseText)
    console.log(objeto);

}