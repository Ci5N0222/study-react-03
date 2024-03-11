import React, { useState } from 'react';

export default function Products() {

    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    return (
        <>
            <ul>
                {
                    products.map((item)=>{
                        return(
                            <li key={item.id}>
                                <article>
                                    <h3>{item.name}</h3>
                                    <p>{item.price}</p>
                                </article>
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={()=>{
                setCount((prev)=>prev+1)
            }}>{count}</button>
        </>
    )
}