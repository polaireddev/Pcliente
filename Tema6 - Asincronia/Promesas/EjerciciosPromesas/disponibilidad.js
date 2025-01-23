


const disponibiliad = document.getElementById("comprobar").addEventListener("click", (e)=>{
    e.preventDefault();

    const name= document.getElementById("login").value;
    gestionarPeticion("compruebaDisponibilidadJSON.php", name)
    
});

/*
Eso de arriba puede causar problemas ya que si no carga el dom no hay nada por ello el enfoque mas adeacudo es este, comprobar q el dom se carga
document.addEventListener("DOMContentLoaded", function() {
    const botonComprobar = document.getElementById("comprobar");
    if (botonComprobar) {
        botonComprobar.addEventListener("click", (e) => {
            e.preventDefault();

            const name = document.getElementById("login").value;
            gestionarPeticion("compruebaDisponibilidadJSON.php", name);
        });
    } else {
        console.error('El elemento con ID "comprobar" no existe en el DOM.');
    }
});



*/



    
function gestionarPeticion(url, name){
    
    const miPromesa= new Promise((resolve, reject)=>{

        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //este formato porq son datos simples, si fuesen datos mas completos application/json
        xhr.onload= ()=>{
            if(xhr.status===200){
                resolve(xhr.responseText)

            }else{
                reject ("Error en respuesta: " + xhr.status)
            }
        
        };
        xhr.onerror= () =>{reject("Error en la peticion")};
        xhr.send("login=" + encodeURIComponent(name));

        /*
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify({ login: name }));


        */
    })


    //llamo aqui a la promesa, podria haber hecho que esto en 2 partes un en controlar 
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



/* 2NDA FORMA DE HACERLO, 

document.getElementById("comprobar").addEventListener("click", (e) => {
    e.preventDefault();

    const name = document.getElementById("login").value;
    gestionarPeticion("compruebaDisponibilidadJSON.php", name)
        .then((respuesta) => {
            // Procesamos la respuesta solo si la promesa es resuelta
            manejarRespuesta(respuesta);
        })
        .catch((error) => {
            // Manejamos el error si la promesa es rechazada
            console.error(error);
        });
});

function gestionarPeticion(url, name) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        // Cuando se recibe la respuesta
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.responseText); // Resolvemos la promesa con la respuesta
            } else {
                reject("Error en la solicitud: " + xhr.status); // Rechazamos la promesa si la respuesta no es exitosa
            }
        };

        // Manejo de error de la petición
        xhr.onerror = () => {
            reject("Se ha producido un error en la petición");
        };

        // Enviamos la solicitud con los datos
        xhr.send("login=" + encodeURIComponent(name));
    });
}

function manejarRespuesta(respuesta) {
    try {
        // Parseamos la respuesta del servidor
        const datosPHP = JSON.parse(respuesta);
        const divAvailable = document.getElementById("disponibilidad");

        // Verificamos si el nombre de usuario está disponible
        if (datosPHP.disponible === "si") {
            divAvailable.innerHTML = "<p>El nombre de usuario está disponible.</p>";
        } else {
            let alternativasHTML = "<p>El nombre de usuario no está disponible.</p><ul>";
            datosPHP.alternativas.forEach(alternativa => {
                alternativasHTML += `<li>${alternativa}</li>`;
            });
            alternativasHTML += "</ul>";
            divAvailable.innerHTML = alternativasHTML;
        }
    } catch (error) {
        console.error("Error al procesar la respuesta:", error);
    }
}




*/



/*Forma de asignar
directamente la cadena

.then((respuesta) => {
    let datosPHP = JSON.parse(respuesta); // Parseamos la respuesta JSON
    const divAvailable = document.getElementById("disponibilidad");
    console.log(datosPHP.disponible);

    if (datosPHP.disponible === "si") {
        console.log(divAvailable);
        console.log("El nombre de usuario está disponible");
        divAvailable.innerHTML = "<p>El nombre de usuario está disponible.</p>";
    } else {
        // Actualizamos directamente el contenido de divAvailable
        divAvailable.innerHTML = "<p>El nombre de usuario no está disponible.</p><ul>";

        // Agregamos las alternativas
        datosPHP.alternativas.forEach(alternativa => {
            divAvailable.innerHTML += `<li>${alternativa}</li>`;
        });

        // Cerramos la lista
        divAvailable.innerHTML += "</ul>";
    }
})
.catch(error => {
    console.log(error);
});

*/