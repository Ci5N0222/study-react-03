import { useEffect, useState } from "react";

// Custom hook
// 함수는 코드의 재사용을 위한 것, 값의 재사용을 위한 것이 아님
export default function useProducts({salesOnly}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setLoading(true);
        setError(undefined);
        fetch(`data/${salesOnly ? 'sale_':''}products.json`)
        .then(res => res.json())
        .then(data=>{
            console.log("네트워크에서 데이터를 받아옴");
            setProducts(data);
        })
        .catch((e) => setError('Error 발생!!'))
        .finally(()=> setLoading(false));
        return ()=>{
            console.log('깨끗하게 청소하는 일을 합니다.')
        }
    }, [salesOnly]);

    return [loading, error, products];
}