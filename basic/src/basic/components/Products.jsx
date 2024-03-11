import React, { useEffect, useState } from 'react';

export default function Products() {

    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    }

    useEffect(()=>{
        fetch(`data/${checked ? 'sale_':''}products.json`)
        .then(res => res.json())
        .then(data=>{
            console.log("네트워크에서 데이터를 받아옴");
            setProducts(data);
        });
        return ()=>{
            console.log('깨끗하게 청소하는 일을 합니다.')
        }
    }, [checked]);

    return (
        <>
            <input type='checkbox' id="checkbox" value={checked} onChange={handleChange}></input>
            <lable htmlFor='checkbox'>Show only Hot sale</lable>
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

        </>
    )
}