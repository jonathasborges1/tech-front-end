
import React from 'react'

interface Props {
    inputState: string | number | readonly string[];
}

const UsuarioSaida: React.FC<Props> = (props) => {

    return(
        <>
 
            <div style={{height: "120px", width: "600px", border: "1px solid black", background: "darkgray", margin: 12}}>
                <p> login: passando_via_props </p>
                <p> Segundo paragrafo com texto qualquer</p>
            </div>
    
            <div style={{height: "120px", width: "600px", border: "1px solid black", background: "black", margin: 12}}>
                <p> login: {props.inputState}  </p>
                <p> Segundo paragrafo com texto qualquer</p>
            </div>
        </>
    )
}

export default UsuarioSaida;


