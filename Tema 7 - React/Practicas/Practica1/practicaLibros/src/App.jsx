import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Libro from "./components/Libro";
import ListadoLibros from "./components/ListadoLibros";
import Cabecera from "./components/Estructura/Cabecera";
import Navegacion from "./components/Estructura/Navegacion";
import Contenido from "./components/Estructura/Contenido";
import PiePagina from "./components/Estructura/PiePagina";

function App() {
  return (
    <>
    <Cabecera/>
    <Navegacion/>
    <Contenido/>
    <PiePagina/>
      
     
    </>
  );
}

export default App;
