//recursos de este componente
import React, { Fragment } from "react";
import sin_portada from "../assets/sin_portada.png";
import "./Libros.css";



const Libro = ({libro}) => { /*tengo q ponerlo entre llaves{} */

    const{ id, titulo, autor, portada, sinopsis, completado}= libro;
    return (
        /*Envolver en fragmentos */
        <Fragment>
            {
                
                <article id={id? id : crypto.randomUUID()} className="libro__contenido">
                    <div className="libro__portada">
                    <img 
                    src={portada? portada : sin_portada} 
                    width="150px"/> 
                    </div>
                    
                    <div className="libro__titulo">
                        {titulo? titulo: "No hay libro"}
                        </div>
                    <div className="libro__autor">
                        {autor ? autor: " No hay autor"}
                    </div> 


                    {/*<div>{sinopsis?  sinopsis: "Sinopsis no disponible"}</div>
                    <div>{completado? completado: "No completado"}</div>*/ }
                    
                    
                </article>
            }
        </Fragment>
    );
};

export default Libro;