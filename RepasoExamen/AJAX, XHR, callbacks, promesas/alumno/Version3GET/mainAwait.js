//ESTO NI PUTO CASO
function recogerDatos() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const profesion = document.getElementById("profesion").value;

    const persona = { nombre, apellido, profesion };
    return JSON.stringify(persona); // Convertimos el objeto a JSON
}

function peticion(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            if (xhr.status === 200) {
                resolve(xhr.responseText); // Resuelve la promesa si el estado es 200
            } else {
                reject(new Error(`Error: ${xhr.status} - ${xhr.statusText}`)); // Rechaza la promesa en caso de error
            }
        });

        xhr.open("GET", url);
        xhr.send();
    });
}

async function enviarDatos() {
    try {
        const personaJson = recogerDatos(); // Recogemos los datos
        const url = `guardarPersonas.php?persona=${encodeURIComponent(personaJson)}`;
        const response = await peticion(url); // Espera la resolución de la promesa
        console.log(response); // Procesamos la respuesta cuando la promesa se resuelve
    } catch (error) {
        console.error(error.message); // Manejamos cualquier error
    }
}

document.getElementById("personaForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevenimos el comportamiento por defecto del formulario
    enviarDatos(); // Llamamos a la función para enviar los datos
});
