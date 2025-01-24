import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Fragment } from 'react';
import Feo2 from "./Feo2.jsx";

function Undiv(props) {
  return (
    <div className='unaClase'>Estoy devolviendo sólo un div
    {props.children}
    </div>
  );
}

function App() {
  const numero= 10;
  console.log(numero);
  return (
    <>
      <Undiv />
      <Dosdivs />
      <Feo2 titulo="Me llamo Feo2" subtitulo="Si funciona" nota="Sigamos">

        <Undiv>Texto de un Div</Undiv>

      </Feo2>
     
    </>
  );
}

function Dosdivs() {
  return (
    <Fragment>
      <div>Estoy devolviendo el primer div</div>
      <div>Y ahora el segundo div</div>
    </Fragment>
  );
}



export default App;
