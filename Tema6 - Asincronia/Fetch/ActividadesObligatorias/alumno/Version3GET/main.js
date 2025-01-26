
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

async function gesticionarPeticion(url) {

    //envio la solicitud http 
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Archivo no encontrado o no tiene permisos ${response.status}`);
        }

        //obtemeos el cuerpo de la respuesta
        const responseData = await response.text(); // Esperando a la promesa
        console.log(responseData);  // Mostramos la respuesta
    } catch (error) {
        console.log(`Se ha producido un error: ${error}`);  
    }
}


