import useInput from "../hooks/useInput";
import useErrorClasses from '../hooks/useErrorClasses';
import NameInput from "./SimpleInputComponents/NameInput";
import EmailInput from "./SimpleInputComponents/EmailInput";
import Button from "./UI/Button";


const SimpleInput = () => {
    const {
        value: enteredName, 
        hasError: nameInputHasError,
        isValid: enteredNameIsValid,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredEmail, 
        hasError: emailInputHasError,
        isValid: enteredEmailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.trim() !== '' && value.includes('@'));

    
    let formIsValid = false;
    if(enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

    // Submit Handler
    const formSubmissionHandler = event => {
        event.preventDefault();

        if(!enteredNameIsValid) return;
        if(!enteredEmailIsValid) return;

        resetNameInput();
        resetEmailInput();
    };

    const emailInputClasses = useErrorClasses(emailInputHasError);
    const nameInputClasses = useErrorClasses(nameInputHasError);


    return (
        <form onSubmit={formSubmissionHandler} >
            <div className={nameInputClasses}>
                <NameInput 
                    label={'Your Name'}
                    enteredName={enteredName}
                    onNameChangeHandler={nameChangeHandler}
                    onNameBlurHandler={nameBlurHandler}
                    nameInputHasError={nameInputHasError}
                />
            </div>
            <div className={emailInputClasses}>
                <EmailInput 
                    label={'Email Address'}
                    enteredEmail={enteredEmail}
                    onEmailChangeHandler={emailChangeHandler}
                    onEmailBlurHandler={emailBlurHandler}
                    emailInputHasError={emailInputHasError}
                />
            </div>
            <div className="form-actions">
                <Button
                    validation={!formIsValid}
                    text={'Submit'}
                />
            </div>
        </form>
    );
};
export default SimpleInput;
