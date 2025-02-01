import React, { Fragment } from "react";
import biblioteca from "../assets/database/biblioteca.json";
import Libro from "../components/Libro.jsx";
import "./ListadoLibros.css";
import { Link } from "react-router-dom";

const ListadoLibros = () => {
    return (
        <Fragment>
            <div className="listado__container">
                <div className="lista__container-libro">
                    {/*comprobar que es un array */}
                    {Array.isArray(biblioteca.libros) && biblioteca.libros.length
                        ? biblioteca.libros.map((libroDatos) => {{/*recorro el array si contien algo */}
                            return (

                                <Link key={libroDatos.id}  to= "./mostrar" className="listado_libro">
                                <Libro
            
                                    libro={libroDatos}

                                /*id={libro.id}
                                        titulo={libro.titulo}
                                        autor={libro.autor}
                                        portada={libro.portada} */
                                ></Libro>
                                </Link>
                            
                            );
                        })
                        : "No se han encontrado libros"}
                </div>
            </div>
        </Fragment>
    );
};

export default ListadoLibros;
