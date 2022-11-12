const useErrorClasses = inputError => {
    const inputClasses = inputError
    ? 'form-control invalid' 
    : 'form-control';

    return inputClasses;
}
export default useErrorClasses;