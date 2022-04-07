import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css'

const AllProducts = ({setCartCount}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    },[])

//console.log(products);
    return (
        <div className='row'>
            <h2>All Products</h2>
            {
                products.map((pd) =>(
                <SingleProduct 
                setCartCount={setCartCount}
                key={pd.id} product={pd}
                ></SingleProduct>
                ))
            }
            
        </div>
    );
};

export default AllProducts;