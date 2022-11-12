import React from 'react'

const Input = ({ type, id, enteredValue, onChange, onBlur }) => {

    return (
        <input 
            type={type}
            id={id}
            value={enteredValue} 
            onChange={onChange}
            onBlur={onBlur}
        />
    )
}

export default Input