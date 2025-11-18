import {useRef} from 'react';

const FocusScreen = () => {

    const inputRef = useRef();

    const onclick = () => {
        //document.querySelector('input').select();
        inputRef.current.select();
    }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input 
        ref={ inputRef}
        type="text" 
        placeholder="Ingrese su nombre"
        className="form-control"
      />
      <input 
        type="text" 
        placeholder="Ingrese su nombre"
        className="form-control mt-2"
      />
      <input 
        type="text" 
        placeholder="Ingrese su nombre"
        className="form-control mt-2"
      />
      <input 
        ref={ inputRef}
        type="text" 
        placeholder="Ingrese su nombre"
        className="form-control mt-2"
      />

      <button 
        className="btn btn-primary mt-2"
        onClick={ onclick }
      >  
        Set focus
      </button>
    </>
  )
}

export default FocusScreen