document.getElementById("comprobar").addEventListener("click", e=>{
    e.preventDefault();
    const name= document.getElementById("login").value;
    gestionarPeticion("compruebaDisponibilidadJSON.php", name)
    
})

function gestionarPeticion(url, name){

    return new Promise ((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url)
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
        xhr.onload=()=>{
            if(xhr.status==200){
                resolve(xhr.responseText);
                console.log("EXITO EN LA RESPUESTA")
            }else{
                reject("Error en la respuesta ");
                console.log("Error en la respuesta ")
            }
        }

        xhr.onerror=()=>{
            reject("Error en la peticion ")
        }
        xhr.send(`login=${encodeURIComponent(name)}`);
    })



    .then(data =>{
        const respuesta= JSON.parse(data);
        const div= document.getElementById("disponibilidad")
        const p= document.createElement("p");
        let alternativas= "";
        console.log(respuesta);
       if(respuesta.disponible =="si"){
      div.innerHTML="El nombre esta disponible";
       
       }else{
        alternativas= "<p> Nombre no disponible Alternaivas:</p> <ul>";
        respuesta.alternativas.forEach(alternativa =>{
            alternativas+=`<li>${alternativa}</li>`
        });
        alternativas+="</ul>";
        div.innerHTML=alternativas

       }
    


    })
    .catch(error =>{
        console.log(error)
    })

}