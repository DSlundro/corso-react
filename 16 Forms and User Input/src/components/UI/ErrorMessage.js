import React from 'react'

const ErrorMessage = ({hasError, message}) => {
    return (
        <>
            {
                hasError && (
                    <p className="error-text">{message}</p>
                )
            }
        </>
    )
}

export default ErrorMessage