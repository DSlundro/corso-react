import React from 'react'

const Button = ({validation, text}) => {
    return (
        <button disabled={validation}>{text}</button>
    )
}

export default Button