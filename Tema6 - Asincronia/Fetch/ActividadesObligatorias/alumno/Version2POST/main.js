document.getElementById("personaForm").addEventListener("submit", e =>{
    e.preventDefault();


    // lo pongo aqui asi se convierte en reutilizable para otras url
    const persona = recogerDatos();
    const url = `guardarPersonas.php`
    const data = `persona= ${encodeURIComponent(persona)}`;


    gesticionarPeticion(url, data)
})

function recogerDatos(){
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const profesion = document.getElementById("profesion").value;

    const persona ={
        nombre,
        apellido,
        profesion
    }

    return JSON.stringify((persona));
}

function gesticionarPeticion(url, data){
    fetch(url, {
        method: "POST",
        headers:{
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body:data
    })
    .then(response=>{
        if(response.ok) return (response.text());
        else throw new Error(`Archivo no encontrado o no tiene permisos ${response.status}`);

    })
    .then(data=>{
        console.log(data);
    })
    .catch(error =>{
        console.log(`Se ha producido un error ${error}`)
    })


}
