document.getElementById("comprobar").addEventListener("click", e=>{
    e.preventDefault();
    url= "compruebaDisponibilidadJSON.php";
    const name = document.getElementById("login").value;
    let namePost = `login= ${encodeURIComponent(name)}`;

    gestionarPeticion(url, namePost);

})

async function gestionarPeticion(url, name){
    try {

        const response = await fetch(url,{
            method: "POST",
            headers:{
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: name
        });
        if(!response.ok){
            console.log("Error");
        }

        let datos = await response.text();
        console.log(datos);
        const objeto= JSON.parse(datos);
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
        
    } catch (error) {
        console.log("Error")
        
    }
}