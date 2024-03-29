
import { useState } from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid  = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    // Change Handler
    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    };

    // Blur Handler
    const inputBlurHandler = () => {
        setIsTouched(true);
    };

    // Reset
    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
}
export default useInput;