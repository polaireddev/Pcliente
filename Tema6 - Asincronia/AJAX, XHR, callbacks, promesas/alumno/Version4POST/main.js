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
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        xhr.onload=()=>{
      
        if(xhr.status==200){
            resolve(xhr.responseText);
        

        }else{
            reject("Error en la peticion");

        }

    }

    xhr.onerror=()=>{
        reject("Ha habido errores")
    }
       

        xhr.send(data);
        
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



