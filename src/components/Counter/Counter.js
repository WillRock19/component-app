import { useState, useReducer } from "react";

export const CounterWithState = () => {
    const [count, setCount] = useState(0);
    
    const increaseCountHandler = () => {
        setCount(prevCount => {
            return prevCount + 1;
        })
    }

    const decreaseCountHandler = () => {
        if(count === 0) return;

        setCount(prevCount => {
            return prevCount - 1;
        })
    }

    return (
        <section className="counter">
            <span>{count}</span>
            <div>
                <button onClick={decreaseCountHandler}>-</button>
                <button onClick={increaseCountHandler}>+</button>
            </div>
        </section>
    );
}

const initialState = {count: 0};

const reducerFunction = (prevState, action) => {
    switch(action.type)
    {
        case 'DECREMENT':
            return prevState.count === 0 ? initialState : {count: prevState.count - 1};
        case 'INCREMENT':
            return { count: prevState.count + 1 };
        default: 
            throw new Error('Reducer cannot be executed.');
    }
}

export const CounterWithReducer = () => {
    const [state, dispatch] = useReducer(reducerFunction, initialState);

    return (
        <section className="counter">
            <span>{state.count}</span>
            <div>
                <button onClick={() => dispatch({ type: 'DECREMENT'})}>-</button>
                <button onClick={() => dispatch({ type: 'INCREMENT'})}>+</button>
            </div>
        </section>
    );
}