


const disponibiliad = document.getElementById("comprobar").addEventListener("click", (e)=>{
    e.preventDefault();

    const name= document.getElementById("login").value;
    gestionarRespuesta("compruebaDisponibilidadJSON.php", name)
    
});






    
function gestionarRespuesta(url, name){
    
    const miPromesa= new Promise((resolve, reject)=>{

        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //este formato porq son datos simples, si fuesen datos mas completos application/json
        xhr.onload= ()=>{
            if(xhr.status===200){
                resolve(xhr.responseText)

            }else{
                reject ("Error en la solicitud: " + xhr.status)
            }
           
        };
        xhr.onerror= () =>{reject("Se ha producido un error")};
        xhr.send("login=" + encodeURIComponent(name));
     

        /*
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify({ login: name }));


        */
    })


    miPromesa
    .then((respuesta)=>{
        let alternativasPHP="";
        let datosPhP= JSON.parse(respuesta); //parseamos
        const divAvailable= document.getElementById("disponibilidad");
        console.log(datosPhP.disponible)

        if(datosPhP.disponible=="si"){
            console.log(divAvailable)
            console.log("El nombre de usuario está disponible");  
            divAvailable.innerHTML= "<p>El nombre de usuario está disponible.</p>";

        }else{
            alternativasPHP= divAvailable.innerHTML= "<p>El nombre de usuario no está disponible.</p><ul>";
            datosPhP.alternativas.forEach(alternativa => {
                alternativasPHP+= `<li>${alternativa}</li>`

                
            });
            alternativasPHP+= "</ul>";
            divAvailable.innerHTML= alternativasPHP

        }

        


    })
    .catch(error=>{
        console.log(error)
    })


   


}


/*

// Usar ternario para manejar la disponibilidad y alternativas
                    disponibilidadDiv.innerHTML = datos.disponible === "si" 
                        ? "<p>El nombre de usuario está disponible.</p>" 
                        : `<p>El nombre de usuario no está disponible. Alternativas:</p>
                           <ul>${datos.alternativas.map(alternativa => `<li>${alternativa}</li>`).join('')}</ul>`;

                           /*Vine datos es el array u alterantivas accedemos a la clave alterantivas q contiene datos, esta en php */


                           /*array.map(elemento => operación sobre elemento); */



