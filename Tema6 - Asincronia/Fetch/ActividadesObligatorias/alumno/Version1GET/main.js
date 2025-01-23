document.getElementById("personaForm").addEventListener("submit", e=>{
    e.preventDefault();
    gesticionarPeticion();

})

function recogerDatos(){
    const nombre= document.getElementById("nombre").value;
    const apellido= document.getElementById("apellido").value;
    const profesion= document.getElementById("profesion").value;


    const persona={
        nombre,
        apellido,
        profesion
    }

    const personaJson= JSON.stringify(persona);
    return personaJson;
}


function gesticionarPeticion(url){
    const personaJson= recogerDatos();
    url= `guardarPersonas.php?persona= ${encodeURIComponent(personaJson)}`;
    fetch(url)
    .then(response=>{
        if(response.ok) return (response.text());
        else throw new Error(`Archivo no encontrado o no tiene permisos ${response.status}`)
    })
    .then(data=>{
        console.log(data);
    })
    .catch(error=> console.log(`Se ha producido un error ${error}`))

}

