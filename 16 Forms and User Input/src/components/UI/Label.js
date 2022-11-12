import React from 'react'

const Label = ({attr, text}) => {
    return (
        <label htmlFor={attr}>{text}</label>
    )
}

export default Label