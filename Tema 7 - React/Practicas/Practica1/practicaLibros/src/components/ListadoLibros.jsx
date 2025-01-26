import React, { Fragment } from "react";
import biblioteca from "../assets/database/biblioteca.json";
import Libro from "../components/Libro.jsx";

const ListadoLibros = () => {
    return (
        <Fragment>
            <h2>Listado Libros</h2>
            {/*comprobar que es un array */}
            {Array.isArray(biblioteca.libros) && biblioteca.libros.length
                ? 
                biblioteca.libros.map(libroDatos => { {/*recorro el array si contien algo */}
                    return (
                        <Libro
                            key={libroDatos.id}
                            libro={libroDatos}

                            /*id={libro.id}
                            titulo={libro.titulo}
                            autor={libro.autor}
                            portada={libro.portada} */
                            

                        ></Libro>
                    );
                })
                : "No se han encontrado libros"}
        </Fragment>
    );
};

export default ListadoLibros;
