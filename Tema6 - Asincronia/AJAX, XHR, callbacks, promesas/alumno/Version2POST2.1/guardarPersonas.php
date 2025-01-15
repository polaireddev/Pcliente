<?php
    
    $persona = json_decode($_POST['persona']);

    // Fichero donde voy a crear las personas
    $fichero = "personas.json";
 
    
 
    //Leo el contenido del archivo en JSON
    $datosJSON = file_get_contents("personas.json");
    
    //Traduzco el contenido del archivo de JSON a código. Obtengo un array de objetos y lo guardo en $personas
    $personas = json_decode($datosJSON, true);
    
    //Añado el objeto enviado desde el cliente al array de objetos
    array_push($personas, $persona );

    $datosJSON = json_encode($personas, JSON_UNESCAPED_UNICODE); // para las tildes


// Abro el fichero en modo escritura
    $fd = fopen($fichero,"w");
    // Escribo el objeto codificado
    fputs($fd,$datosJSON);
 
    // cierro el fichero
    fclose($fd);
 
    // Vuelvo a mandar a la persona en la respuesta
    echo($datosJSON);





    /*

1. php://input es un flujo (stream) 
que te permite acceder a los datos crudos de la solicitud, 
independientemente del tipo de contenido que se esté enviando, es decir si JSON o XML

Usa php://input: Cuando procesas APIs, recibes JSON, XML, o necesitas leer el cuerpo crudo de la solicitud.
Recibiendo datos en formatos como JSON o XML, o si es API, php://input es la mejor opción.


2.Formularios HTML tradicionales, $_POST 
Usa $_POST: Cuando trabajas con formularios estándar en aplicaciones simples.




  


    */
?>


