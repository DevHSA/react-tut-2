import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {
  
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state=> state.showCounter)
  const incrementHandler = () => {
    dispatch({type:'INCREMENT'});
  };
  const incrementByValueHandler = () => {
    dispatch({type:'INCREMENTBYVALUE', val:10});
  };
  const decrementHandler = () => {
    dispatch({type:'DECREMENT'});  
  };
  const toggleCounterHandler = () => {
    dispatch({type:'SHOWTOGGLE'})
  };
  

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>-- {counter} --</div>}
      <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={incrementByValueHandler}>IncrementBy10</button>
      
      <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;