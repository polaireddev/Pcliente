import React, {Fragment} from "react";
import "./Navegacion.css";

const Navegacion =()=>{

    return (
        <Fragment>
            <nav className="menu">
                <ul className="menu__lista">
                    <li className="menu__item" ><a className="menu__link" href="#">Inicio</a></li>
                    <li className="menu__item"> <a  className="menu__link" href="#">Crear Libros</a></li>
                    <li className="menu__item"><a  className="menu__link" href="#">Buscar Libros</a></li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default Navegacion;