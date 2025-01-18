
document.getElementById("personaForm").addEventListener("submit", (e)=>{
e.preventDefault();
enviarDatos();

})

function recogerDatos(){
    const nombre= document.getElementById("nombre").value;
    const apellido= document.getElementById("apellido").value;
    const profesion= document.getElementById("profesion").value;


    // con esto lo dejamos preparado para hacer el parse 
    let persona = {
        nombre, apellido, profesion
    }


    // pasamos de objeto a json

    let personaJson= JSON.stringify(persona);
    return personaJson;
    

}


function peticion (url){ //a peticion q vamos a hacer
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload=()=>{
            if(xhr.status==200){
                resolve(xhr.responseText);

            }else{
                reject("Error en la peticion" + xhr.status)
            }

        };

        xhr.onerror=()=>{
            reject("Se ha producido un error");
        }

        xhr.send();

    })

}


function enviarDatos(){
    const personaJson= recogerDatos(); //  podria haberlo hecho directo sin ninguna funcion pero bueno
    const url= `guardarPersonas.php?persona=${encodeURIComponent(personaJson)}`; 
    
    // una vez q tenemos todo llamamos a al promesa con peticon
    peticion(url)
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        });
        
    

}




