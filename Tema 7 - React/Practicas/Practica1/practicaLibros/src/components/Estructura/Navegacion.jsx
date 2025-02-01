import React, { Fragment } from "react";
import "./Navegacion.css";
import { NavLink } from "react-router-dom";

const Navegacion = () => {
    return (
        <Fragment>
            <nav className="menu">
                <ul className="menu__lista">
                    <li className="menu__item">
                        <NavLink 
                        to = "/" 
                        className={({isActive})=>isActive ? "menu__link menu__link--activo" : "menu__link"

                        }>
                            Inicio
                        </NavLink>
                        
                    </li>

                    <li className="menu__item">
                        <NavLink to ="./crear" className={({isActive})=> isActive ? "menu__link menu__link--activo" : "menu__link"

                        }>
                            Crear Libro
                        </NavLink>
                        
                    </li>

                    <li className="menu__item" >
                        <NavLink to="./buscar"  className={({isActive})=>isActive? "menu__link menu__link--activo": "menu__link"}>
                            Buscar Libro
                        </NavLink>
                    </li>

                  
                </ul>
            </nav>
        </Fragment>
    );
};

export default Navegacion;
