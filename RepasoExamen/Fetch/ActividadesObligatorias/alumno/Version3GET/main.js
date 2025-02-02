
document.getElementById("personaForm").addEventListener("submit", e => {
    e.preventDefault();
    const persona = recogerDatos();
    const url = `guardarPersonas.php?persona=${encodeURIComponent(persona)}`;
    

    gesticionarPeticion(url);
});

function recogerDatos() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const profesion = document.getElementById("profesion").value;

    const persona = {
        nombre,
        apellido,
        profesion
    };

    return JSON.stringify(persona);
}

async function  gesticionarPeticion(url) {
    try {
        const respuesta = await fetch(url);

        if(!respuesta.ok){
            console.log("Error en la respuesta");
        }console.log("EXITO EN LA RESPUESTA")

        const respuestaDato = await respuesta.text();
        console.log(respuestaDato);
        
    } catch (e) {
        console.log("ERROR")
        
    }
    
}


