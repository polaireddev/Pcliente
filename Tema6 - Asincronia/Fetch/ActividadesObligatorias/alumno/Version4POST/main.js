
document.getElementById("personaForm").addEventListener("submit", e => {
    e.preventDefault();
    const persona = recogerDatos();
    const url = `guardarPersonas.php`;
    const data = `persona=${encodeURIComponent(persona)}`;

    gesticionarPeticion(url, data);
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

async function gesticionarPeticion(url, data) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: data
        });

        if (!response.ok) {
            throw new Error(`Archivo no encontrado o no tiene permisos ${response.status}`);
        }

        const responseData = await response.text(); // Esperamos a que se resuelva la promesa
        console.log(responseData);  // Mostramos la respuesta
    } catch (error) {
        console.log(`Se ha producido un error: ${error}`);  // Si algo falla, lo capturamos aquí
    }
}


