import { legacy_createStore } from "redux";
import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialCounterState={counter:0,showCounter:true}
 const counterSlice=createSlice({
    name:'counter',
    initialState : initialCounterState ,
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state,action){
            state.counter=state.counter+action.payload
        },
        toggleCounter(state){
            state.showCounter=!state.showCounter;   
        }
    }

 })
 
const initialAuthState={LoginStatus:false}
 const authenticationSlice=createSlice({
    name:'authentication',
    initialState: initialAuthState,
    reducers:{  
     Login(state){
            state.LoginStatus=true
            console.log(state.LoginStatus)
        },
        Logout(state){
            state.LoginStatus=false
        }

    }
 })

 

const store = configureStore({
    reducer:{counter: counterSlice.reducer, authentication: authenticationSlice.reducer}
});
export const authenticationActions=authenticationSlice.actions;
export const counterActions=counterSlice.actions;
export default store;