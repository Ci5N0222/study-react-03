import React from 'react';

export default function Counter() {
    let num = 0;
    return (
        <div className='counter'>
            <span className='number'>{ num }</span>
            <button className='button' onClick={()=>{
                num++;
                console.log(num);
            }}>Add +</button>
        </div>
    );
}