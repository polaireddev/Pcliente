import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Libro from "./components/Libro";
import ListadoLibros from "./components/ListadoLibros";
import Cabecera from "./components/estructura/Cabecera";
import Navegacion from "./components/estructura/Navegacion";
import Contenido from "./components/estructura/Contenido";
import PiePagina from "./components/estructura/PiePagina";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecera />
        <Navegacion />
        <Contenido />
        <PiePagina />
      </BrowserRouter>
    </>
  );
}

export default App;
