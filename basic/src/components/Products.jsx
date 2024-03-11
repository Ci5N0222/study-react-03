import React, { useEffect, useState } from 'react';

export default function Products() {

    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('data/products.json')
        .then(res => res.json())
        .then(data=>{
            console.log("데이터를 받아옴");
            setProducts(data);
        });
        return ()=>{
            console.log('')
        }
    }, []);

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