import React, { useState } from 'react';

export default function Counter({setScore}) {
    const [count, setCount] = useState(0);
    return (
        <div className='container'>
            <div className='counter'>
                <span className='number'>{ count }</span>
                <button className='button' onClick={()=>{
                    setCount((prev)=>prev+1);
                    setScore((prev)=>prev+1);
                }}>Add +</button>
            </div>
        </div>
    );
}