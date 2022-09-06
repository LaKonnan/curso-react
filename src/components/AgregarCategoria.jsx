import { useState } from "react"

export const AgregarCategoria = ({nuevaCategoria}) => {
  const [ValorInput, setValorInput] = useState('');

  const cambioValorInput = ({ target }) => {
    setValorInput(target.value);
  }

  const enviarInput = (event) => {
    event.preventDefault();
    if( ValorInput.trim().length > 0) {
      // setCategories(categories => [ValorInput, ...categories]);
      nuevaCategoria(ValorInput.trim());
      setValorInput('');
    }
  }

  return (
    <>
      <form onSubmit={ enviarInput } >
        <input 
          type="text" 
          placeholder="Buscar gif..." 
          value={ ValorInput } 
          onChange={ cambioValorInput }  
        />
      </form>
      
      <br /><br />
      
    </>
  )
}
