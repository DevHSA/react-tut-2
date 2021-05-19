import {useState} from 'react'


const useInp = (validationFunction) =>{

    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);
    // const [valid, setValid] = useState(false);

    const valid = validationFunction(value);
    const error = touched && valid;

    const setInputHandler = (event) => {
        setValue(event.target.value);
    }

    const setTouchedHandler = () => {
        setTouched(true);
    }

    return {value,touched,valid, setInputHandler,setTouchedHandler,error}
};

export default useInp;