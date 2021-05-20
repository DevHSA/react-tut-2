import {useState} from 'react'


const useInp = (validationFunction) =>{

    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);
    // const [valid, setValid] = useState(false);

    const valid = validationFunction(value);
    const error = touched && !valid;

    const setInputHandler = (event) => {
        setValue(event.target.value);
    }

    const setTouchedHandler = () => {
        setTouched(true);
    }

    const reset = () => {
        setTouched(false);
        setValue('');
    }

    return {value,valid, error,setInputHandler,setTouchedHandler,reset}
};

export default useInp;