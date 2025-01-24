
function Feo2(props) {
    console.log(props)
    return (
      <div className='componente'>
        <h2>{props.titulo}</h2>
        <div>{props.subtitulo}</div>
        <div>{props.nota}</div>
        <div>{props.children}</div>
      </div>
    );
  }

  export default Feo2;