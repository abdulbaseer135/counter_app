import React, { useState } from 'react';
import './Counter.css'

const Counter = () => {
    const [value, setValue] = useState(0);

    // Decrement function
    const handleDecrement = (num) => {
        setValue(value - num);
    }

    // Increment function
    const handleIncrement = (num) => {
        setValue(value + num);
    }
    //Reset function
    const handleReset=()=>{
        setValue(0);
    }


    return (
        <div className='counter-main'>
        <h2 className='heading'>Increment/Decrement Counter</h2>
        <div className='counter'>
            <button id='red' onClick={()=>handleDecrement(1)}>-</button>
            <p>{value}</p>
            <button id='green' onClick={()=>handleIncrement(1)}>+</button>
        </div>
        <div className="counter-reset">
        <button onClick={handleReset}>Reset</button>
        </div>
        </div>
    );
}

export default Counter;
