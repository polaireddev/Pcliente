document.getElementById("comprobar").addEventListener("click", e=>{
    e.preventDefault();
    url= "compruebaDisponibilidadJSON.php";
    const name = document.getElementById("login").value;
    let namePost = `login= ${encodeURIComponent(name)}`;

    gestionarPeticion(url, namePost);

})

function gestionarPeticion(url, namePost){

    fetch(url, {
        method:"POST",
        headers:{
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body:namePost

    })
    .then(response =>{
        if(response.ok){
            return (response.text())
        }else{
            console.log("Error en la respuesta")
        }
    })

    .then (data =>{
        const objeto= JSON.parse(data);
        const div= document.getElementById("disponibilidad")
        let texto = "";
        console.log(objeto);
        if(objeto.disponible == "si"){
            div.innerHTML="Nombre disponible";
            
        }else{

            texto = "<p>Nombre no diponible</p><br></ul>"
            objeto.alternativas.forEach(alternativa =>{
                texto +=`<li>${alternativa}</li>`;
            })

            texto+="</ul>";

            div.innerHTML= texto;
        }
    })
    .catch(e=>{
        console.log("Error" + e)
    })


}