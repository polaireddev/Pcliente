
document.getElementById("personaForm").addEventListener("submit", (e)=>{
    e.preventDefault();
    const persona = recogerDatos();
    gestionarPeticion(`guardarPersonas.php?persona=${persona}`, mostrarDatos)
    
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


    function gestionarPeticion(url, mostrarDatos){
        return new Promise ((resolve, reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.open ("GET", url);
            xhr.onload=()=>{
                if(xhr.status===200){
                    console.log("EXITO");
                    resolve(xhr.responseText)
                }else{
                    reject("ERROR EN LA RESPUESTA")
                }

            }  
            
            xhr.onerror=()=>{
                reject("Error en la peticion")
            }

            xhr.send()
        })

        .then (data =>{
            mostrarDatos(data)
            
        })

        

    }

    function mostrarDatos(data){
        const objeto = JSON.parse(data)
            console.log(data)
            console.log(objeto);
        
    }

    
    
    
    
    
    
    
    
    


