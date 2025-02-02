document.getElementById("personaForm").addEventListener("submit", e=>{
    e.preventDefault();

    const persona= recogerDatos();

    gestionarPeticion("guardarPersonas.php", persona)



})

function recogerDatos(){
    let nombre = document.getElementById("nombre").value; 
    let apellido = document.getElementById("apellido").value; 
    let profesion = document.getElementById("profesion").value; 

    const persona = {
        nombre, apellido, profesion
    }
    

    let personaJson = JSON.stringify(persona);
    let personaPost= `persona=${encodeURIComponent(personaJson)}`
    return personaPost;

}


function gestionarPeticion(url, data){

    fetch(url, {
        method:"POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: data 

    })

    .then(respuesta =>{
        if(!respuesta.ok){
            console.log("ERROR EN LA RESPUESTA")
        }else{
            console.log("EXITO EN LA RESPUESTA")
            return respuesta.text();
        }
    })

    .then (datos =>{
        console.log(datos);
    })

}



