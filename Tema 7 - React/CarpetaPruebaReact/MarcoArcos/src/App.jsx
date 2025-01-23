import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Fragment } from 'react'


function Undiv(props){
  return (
    <div class='componente'>Estoy devolviendo sólo un div</div>
  );
}

function App() {

  return (
    <>

    <Undiv/>  
  {/*tambien podria poner esto
  <Undiv></Undiv>
  */}

<Dosdivs/>

<Feo2 titulo= "Me llamo Feo2" subtitulo="Si funciona" nota= "Sigamos"/>
{
  /*Tambien equivale a esto 
  <Feo2 titulo="Me llamo Feo2"></Feo2>*/
}

    

    </>
  )
}


function Dosdivs(props){
  return (
  <Fragment>
  <div>Estoy devolviendo el primer div</div>
  <div>Y ahora elsegundo div</div>

  </Fragment>
  
);
}

function Feo2(props) {
  return (
  <div className='componente'>
  <h2>{props.titulo}</h2>
  <div>{props.subtitulo}</div>
  <div>{props.nota}</div>
  </div>
  );
  }








export default App
