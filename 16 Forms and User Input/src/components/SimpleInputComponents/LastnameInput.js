import React from 'react'
import ErrorMessage from './../UI/ErrorMessage';
import Input from './../UI/Input';
import Label from './../UI/Label';

const LastnameInput = ({ label, enteredLastname,  onLastnameChangeHandler, onLastnameBlurHandler, lastnameInputHasError }) => {

    return (
        <>
            <Label
                attr={'lastname'}
                text={label}
            />
            <Input
                type='text' 
                id='lastname' 
                value={enteredLastname} 
                onChange={onLastnameChangeHandler}
                onBlur={onLastnameBlurHandler}
            />
            <ErrorMessage
                    hasError={lastnameInputHasError}
                    message={`Lastname must not be empty`}
                />
        </>
    )
}

export default LastnameInput;