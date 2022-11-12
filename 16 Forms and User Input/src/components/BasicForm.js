import useInput from './../hooks/useInput';
import useErrorClasses from '../hooks/useErrorClasses';
import Button from './UI/Button';
import EmailInput from './SimpleInputComponents/EmailInput';
import NameInput from './SimpleInputComponents/NameInput';
import LastnameInput from './SimpleInputComponents/LastnameInput';


const BasicForm = () => {
    // Name
    const {
        value: enteredName, 
        hasError: nameInputHasError,
        isValid: enteredNameIsValid,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '');

    // Lastname
    const {
        value: enteredLastname, 
        hasError: lastnameInputHasError,
        isValid: enteredLastnameIsValid,
        valueChangeHandler: lastnameChangeHandler,
        inputBlurHandler: lastnameBlurHandler,
        reset: resetLastnameInput
    } = useInput(value => value.trim() !== '');

    // Email
    const {
        value: enteredEmail, 
        hasError: emailInputHasError,
        isValid: enteredEmailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.trim() !== '' && value.includes('@'));

    // From validation
    let formIsValid = false;
    if( enteredNameIsValid && 
        enteredEmailIsValid &&
        enteredLastnameIsValid) formIsValid = true;

    // Submit Handler
    const formSubmissionHandler = event => {
        event.preventDefault();

        if(!formIsValid) return;
        
        console.log(enteredName, enteredLastname, enteredEmail);

        resetNameInput();
        resetLastnameInput();
        resetEmailInput();
    };

    // Classes
    const emailInputClasses = useErrorClasses(emailInputHasError);
    const nameInputClasses = useErrorClasses(nameInputHasError);
    const lastnameInputClasses = useErrorClasses(lastnameInputHasError);


    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='control-group'>
                <div className={nameInputClasses}>
                    <NameInput
                        label={'Your Name'}
                        enteredName={enteredName}
                        onNameChangeHandler={nameChangeHandler}
                        onNameBlurHandler={nameBlurHandler}
                        nameInputHasError={nameInputHasError}
                    />
                </div>
                <div className={lastnameInputClasses}>
                    <LastnameInput
                        label={'Your Lastname'}
                        enteredLastname={enteredLastname}
                        onLastnameChangeHandler={lastnameChangeHandler}
                        onLastnameBlurHandler={lastnameBlurHandler}
                        lastnameInputHasError={lastnameInputHasError}
                    />
                </div>
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
            <div className='form-actions'>
                <Button
                    validation={!formIsValid}
                    text={'Submit'}
                />
            </div>
        </form>
        );
};

export default BasicForm;