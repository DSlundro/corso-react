import React from 'react'
import ErrorMessage from './../UI/ErrorMessage';
import Input from './../UI/Input';
import Label from './../UI/Label';

const NameInput = ({ label, enteredName,  onNameChangeHandler, onNameBlurHandler, nameInputHasError }) => {

    return (
        <>
            <Label
                attr={'name'}
                text={label}
            />
            <Input
                type='text' 
                id='name' 
                value={enteredName} 
                onChange={onNameChangeHandler}
                onBlur={onNameBlurHandler}
            />
            <ErrorMessage
                    hasError={nameInputHasError}
                    message={`Name must not be empty`}
                />
        </>
    )
}

export default NameInput;