import React from 'react'
import ErrorMessage from '../UI/ErrorMessage';
import Input from '../UI/Input';
import Label from '../UI/Label';


const EmailInput = ({ enteredEmail, onEmailChangeHandler, onEmailBlurHandler, emailInputHasError, label }) => {

    return (
        <>
            <Label
                attr={'email'}
                text={label}
            />
            <Input 
                type='text' 
                id='name' 
                value={enteredEmail} 
                onChange={onEmailChangeHandler}
                onBlur={onEmailBlurHandler}
            />
            <ErrorMessage
                hasError={emailInputHasError}
                message={`Name must not be empty and must have '@'`}
            />
        </>
    )
}
export default EmailInput;