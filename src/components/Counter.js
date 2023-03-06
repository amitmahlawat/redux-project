import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { authenticationActions, counterActions } from '../store/index';
const Counter = () => {


const counter=useSelector(state=>state.counter.counter)
const show=useSelector(state=>state.counter.showCounter)
const dispatch=useDispatch()
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

const incrementHandler=()=>{
  dispatch(counterActions.increment())
};
const increaseHandler=()=>{

  dispatch(counterActions.increase(5))
}

const decrementHandler=()=>{

  dispatch(counterActions.decrement())
};


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
    
      {show &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>incrementBy5</button>
        <button onClick={decrementHandler}>decrementBy5</button>
        <button onClick={increaseHandler}>increase</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
