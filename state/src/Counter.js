import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleCounter = (opr, value) => {
        if (opr == "+") {
            setCount(count + value);
        }else {
            setCount(count - value);
        } };
    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={() => handleCounter("+", 1)}>+</button>
            <button onClick={() => handleCounter("-", 1)}>-</button>
        </div>
    );};
export default Counter;