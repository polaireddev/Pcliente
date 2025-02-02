// este ejercicio seria lo mismo, lo unico que cambia es el tipo de dato que enviamos, ya q lo enviamos en el cuerpo de la solicitud


document.getElementById("personaForm").addEventListener("submit", e=>{
    e.preventDefault();
    const personaJson= recogerDatos();
    peticion("guardarPersonas.php", personaJson, mostrarDatos)
})





function recogerDatos(){
    const nombre= document.getElementById("nombre").value;
    const apellido= document.getElementById("apellido").value;
    const profesion= document.getElementById("profesion").value;

    const persona={nombre, apellido, profesion};

    const personaJson= `persona=${encodeURIComponent( JSON.stringify(persona))}`; 
    return personaJson;
}

function peticion(url, data, mostrarDatos){
    return new Promise ((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded") 

        xhr.onload=()=>{
            if(xhr.status==200){
                console.log("EXITO")
            }else{
                console.log("ERROR ")
            }
        }

        xhr.onerror=()=>{
            console.log("Error en la peticion ")
        }

        xhr.send(data)

    })

    .then (data=>{
        mostrarDatos(data)
    })

   

}

function mostrarDatos(data){
    console.log(data);
    const objeto = JSON.parse(data);
    console.log(objeto);
    
    

    
}






