
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
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Archivo no encontrado o no tiene permisos ${response.status}`);
        }

        const responseData = await response.text(); // Esperamos a que se resuelva la promesa
        console.log(responseData);  // Mostramos la respuesta
    } catch (error) {
        console.log(`Se ha producido un error: ${error}`);  // Si algo falla, lo capturamos aquí
    }
}


