import { useReducer } from "react";
import { useState } from "react"

const buttonStyle={
    backgroundColor:"green",
    width: '400px'
}
const buttonStyle2={
    backgroundColor:'red',
    width: '400px'
}

const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, counter: state.counter + 1 };
      case 'DECREMENT':
        return { ...state, counter: state.counter - 1 };
      default:
        return state;
    }
};

function CounterFun() {
    const initialState = { counter: 0 };
    const [state, dispatch]=useReducer(reducer, initialState)

    const incrementCounter = () => {
        dispatch({ type: 'INCREMENT' });
    };
    
    const decrementCounter = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <div>   
            <div>
                Counter {state.counter}
            </div>      

            <button type='button' onClick={incrementCounter} style={buttonStyle}>+</button>

            <button type='button' onClick={decrementCounter} style={buttonStyle2}>-</button>     
            
        </div>
    )
}

export default CounterFun