import { legacy_createStore } from "redux";


const CounterReducer=(state={counter:0},action)=>{

    if(action.type==='increment'){
        return{
            counter: state.counter+2
        }
    }
    if(action.type==='decrement'){
        return{
            counter:state.counter-2
        }
    }
    return state
};

const store = legacy_createStore(CounterReducer);


export default store;