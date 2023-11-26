import React, { useEffect, useState } from 'react'
import "./Products.css"
import { Button } from '@nextui-org/react';

export default function Products() {

    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log("Component mounted!");

        async function fetchData() {
            const res = await fetch(process.env.REACT_APP_API);
            const data = await res.json();
            setProducts(data);
        }
        fetchData();

    }, []);
    useEffect(() => {
        console.log("Some of the state data was changed...");
    });
    useEffect(() => {
        console.log("Count object was changed...");
    }, [count]);
    useEffect(() => {
        return () => {
            console.log("Component unmounted!");
        }
    }, []);

    const increment = () => setCount(count + 1);

    return (
        <div className='Products'>
            <h2>Product Catalog</h2>
            <Button onClick={increment} color='primary'>Increment</Button>
            <ul>
                {products.map(i => <li key={i.id}>{i.name} - {i.price}$</li>)}
            </ul>
        </div>
    )
}
