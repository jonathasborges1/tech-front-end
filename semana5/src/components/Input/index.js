import React from 'react';

function Input(props){
    return(
        <input 
            type={props.type} 
            value={props.value} 
            placeholder={props.placeholder} 
            onChange={props.onChange}
        />
    )
}

export default Input