// este ejercicio seria lo mismo, lo unico que cambia es el tipo de dato que enviamos, ya q lo enviamos en el cuerpo de la solicitud


document.getElementById("personaForm").addEventListener("submit", e=>{
    e.preventDefault();
    enviarDatos();
})



function recogerDatos(){
    const nombre= document.getElementById("nombre").value;
    const apellido= document.getElementById("apellido").value;
    const profesion= document.getElementById("profesion").value;

    const persona={nombre, apellido, profesion};


        /*lo preparamos para que el objeto una vez parseado sea asignado a persona par que lo pueda identificar el post
    const personaJson= `persona=${JSON.stringify(persona)}`; 
    return personaJson;*/

    const personaJson= `persona=${encodeURIComponent( JSON.stringify(persona))}`; 
    return personaJson;
}

function peticion(url, data){

    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded") // esto es lo que cambia respecto al ejercico de get, ya q los datos se van a enviar en el cuerpo de la solicitud
        xhr.onload=()=>{
      
        if(xhr.status==200){ 
            resolve(xhr.responseText);
        

        }else{
            reject("Error en la respuesta" + xhr.status)

        }

    }

    xhr.onerror=()=>{
        reject("Error en la petición");
    }
       

        xhr.send(data); // enviamos los datos
        
    })

}

function enviarDatos(){
    const personaJson= recogerDatos();
    
    peticion("guardarPersonas.php", personaJson)
    .then(respuesta=>{
        console.log(respuesta);
    })
    .catch(error=>{
        console.log(error)

    });
    

    
}






