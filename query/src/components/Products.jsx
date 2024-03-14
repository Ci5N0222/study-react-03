import React, { useState } from 'react';
import useProducts from '../../hooks/use-products';

export default function Products() {
    const [checked, setChecked] = useState(false);
    const [loading, error, products] = useProducts({ salesOnly: checked })
    const handleChange = () => {
        setChecked((prev) => !prev);
    }

    if(loading) return <p>Loading...</p>;
    if(error) return <p>{error}</p>;

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