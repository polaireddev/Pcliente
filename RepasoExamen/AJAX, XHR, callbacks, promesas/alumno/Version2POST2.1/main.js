document.getElementById("personaForm").addEventListener("submit", e =>{
    e.preventDefault();
    const personaJson = recogerDatos();
    const personaPost= `persona=${encodeURIComponent(personaJson)}`
    gestionarPeticion(`guardarPersonas.php`, gestionarRespuesta, personaPost);


    
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


function gestionarPeticion(url, gestionarRespuesta, data){
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded") // Establece el tipo de contenido

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
    
    xhr.send(data);
}

function gestionarRespuesta(xhr){
    const objeto = JSON.parse(xhr.responseText);
    console.log(xhr.responseText)
    console.log(objeto);

}