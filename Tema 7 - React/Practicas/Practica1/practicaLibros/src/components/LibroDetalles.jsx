import React, { Fragment } from "react";
import "./LibroDetalles.css";
import sin_portada from "../assets/sin_portada.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";

const LibroDetalles = (props) => {
  const { titulo, autor, portada, completado, sinopsis } = props.libroBuscado;

  return (
    <Fragment>
      <article className="libro-detalle">
        <img
          className="libro-detalle__portada"
          src={portada ? portada : sin_portada}
          alt={titulo ? titulo : "No se ha especificado título."}
        ></img>
        <div className="libro-detalle__info">
          <div>
            <FontAwesomeIcon
              title={completado ? "Leido" : "No leido"}
              icon={completado ? faCircleCheck : faCircleXmark}
              className="className='libro-detalle__completado libro-detalle__completado--true"
              size="2px"
            ></FontAwesomeIcon>

            <span className="libro-detalle__titulo">
              {titulo ? titulo : "No se ha especificado título."}
            </span>
          </div>

          <div className="libro-detalle__autor">
            {autor ? autor : "No se ha especificado autor."}
          </div>
          <div className="libro-detalle__sinopsis">
            {sinopsis ? sinopsis : "No se ha especificado sinopsis."}
          </div>

          <Link to="#">
            <input
              type="button"
              value="Eliminar de la biblioteca"
              className="boton boton--cancelar"
            />
          </Link>
          <Link to="/">
            <input
              type="button"
              value="&lt; Atrás"
              className="boton boton--volver"
            />
          </Link>
        </div>
      </article>
    </Fragment>
  );
};

export default LibroDetalles;
