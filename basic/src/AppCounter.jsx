import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter() {
    let [score, setScore] = useState(0);
    return (
        <div>
            <span className='total-count'>Total Count: {score} {score > 10 ? "★":"☆"}</span>
            <Counter setScore={setScore}/>
            <Counter setScore={setScore}/>
        </div>
    );
}