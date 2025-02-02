
document.getElementById("personaForm").addEventListener("submit", e => {
    e.preventDefault();
    const persona = recogerDatos();
    const url = `guardarPersonas.php`;
    
    gesticionarPeticion(url, persona);
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

    let personaJson= JSON.stringify(persona);
    return `persona= ${encodeURIComponent(personaJson)}`;

}

async function gesticionarPeticion(url, datos) {
    try {
        const respuesta = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: datos
        });

        if(!respuesta.ok){
            console.log("Error en la respuesta");
        }console.log("EXITO EN LA RESPUESTA")

        const respuestaDato = await respuesta.text();
        console.log(respuestaDato);
        
    } catch (e) {
        console.log("ERROR")
        
    }
    
}


