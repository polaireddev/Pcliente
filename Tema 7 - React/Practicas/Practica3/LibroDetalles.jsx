import React, { Fragment } from "react";
import "./LibroDetalles.css";
import sin_portada from "../assets/img/sin_portada.png";
import { NavLink, Link } from "react-router-dom";



const LibroDetalles = (props) => {
  const { titulo, autor, portada, completado, sinopsis } = props.libroBuscado;

  return (
    <Fragment>
      <article className='libro-detalle'>
        <img
          className='libro-detalle__portada'
          src={portada ? portada : sin_portada}
          alt={titulo ? titulo : "No se ha especificado título."}
        ></img>
        <div className='libro-detalle__info'>
          <div>
            {completado ? "Leído":"No leído"}
            <span className='libro-detalle__titulo'>
              {titulo ? titulo : "No se ha especificado título."}
            </span>
          </div>
          <div className='libro-detalle__autor'>
            {autor ? autor : "No se ha especificado autor."}
          </div>
          <div className='libro-detalle__sinopsis'>
            {sinopsis ? sinopsis : "No se ha especificado sinopsis."}
          </div>

        </div>
      </article>
    </Fragment>
  );
};

export default LibroDetalles;
