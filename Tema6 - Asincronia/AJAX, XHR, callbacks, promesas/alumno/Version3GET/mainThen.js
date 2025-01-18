
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
        return new Promise((resolve, reject) => { // creamos una nueva promesa
            let xhr = new XMLHttpRequest(); //abrimos conexion
            xhr.open("GET", url);
            xhr.onload=()=>{ 
                if(xhr.status==200){
                    resolve(xhr.responseText);
    
                }else{
                    reject("Error en la respuesta" + xhr.status)
                }
    
            };
    
            xhr.onerror=()=>{
                reject("Error en la petición");
            }
    
            xhr.send();
    
        })
    
    }
    
    
    function enviarDatos(){
        const personaJson= recogerDatos(); //  podria haberlo hecho directo sin ninguna funcion pero bueno
        const url= `guardarPersonas.php?persona=${personaJson}`; 
        
        // una vez q tenemos todo llamamos a al promesa con peticion, ya que es lo q devuelve
        peticion(url)
            .then(response=>{ // esto llama al resolve
                console.log(response);
            })
            .catch(error=>{ // esto llama a los reject
                console.log(error);
            });
            
        
    
    }
    
    
    
    
    


