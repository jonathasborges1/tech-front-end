
import UsuarioSaida from 'UsuarioSaida';
import React, { useState } from 'react'

interface Props {}

const UsuarioEntrada: React.FC<Props> = () => {

    const [value, setValue] = useState({inputState: ""});

    const handleChange = (event) => {    
        setValue({inputState: event.target.value});  
    }

    return(
        <>
            <label> 
                login: <input type="text" value={value.inputState} onChange={handleChange} />        
            </label>
            <UsuarioSaida inputState={value.inputState}></UsuarioSaida>
        </>
    )
}

export default UsuarioEntrada;


