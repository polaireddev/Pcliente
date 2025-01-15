


const disponibiliad = document.getElementById("comprobar").addEventListener("click", ()=>{
    
function gestionarRespuesta(url, callback){
    
    const miPromesa= new Promise((resolve, reject)=>{

        const xhr = XMLHttpRequest();
        xhr.open("POST", url);
        xhr.onload= ()=>{resolve(xhr.response)};
        xhr.onerror= () =>{reject("Se ha producido un error")};
        xhr.send();

    })


    miPromesa
    .then((respuesta)=>{
        let nombre= JSON.parse(respuesta);
    })
    .catch(error=>{
        console.log(error)
    })


   


}


const nombre= document.getElementById("name").value();


gestionarRespuesta("compruebaDisponibilidadJSON.php", nombre);


})




