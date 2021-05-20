import { useReducer } from 'react';

const reduceFunction = (state,action) =>{

  if(action.type==='VALUE'){
    return {enteredValue: action.val, isTouched: state.isTouched}
  }
  if(action.type==='TOUCH'){
    return {enteredValue: state.enteredValue, isTouched: action.val}
  }
  if(action.type==='RESET'){
    return {enteredValue: action.val1, isTouched: action.val2}
  }
  
  return {enteredValue:'', isTouched: ''}
}

const useInput = (validateValue) => {

  const [inputDetail, inputDispatcher] = useReducer(reduceFunction, {enteredValue:'', isTouched: ''})
  // const [enteredValue, setEnteredValue] = useState('');
  // const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(inputDetail.enteredValue);
  const hasError = !valueIsValid && inputDetail.isTouched;

  const valueChangeHandler = (event) => {
    inputDispatcher({type:'VALUE',val:event.target.value})
    // setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    inputDispatcher({type:'TOUCH',val:true})
    // setIsTouched(true);
  };

  const reset = () => {
    
    inputDispatcher({type:'RESET',val1:'', val2:false }) 
    // setEnteredValue('');
    // setIsTouched(false);
  };

  return {
    value: inputDetail.enteredValue,
    isValid: inputDetail.valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;