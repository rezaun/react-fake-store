import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './SingleProduct.css';

const SingleProduct = ({product,setCartCount}) => {
    
    return (
        <div data-aos="flip-left" className='col-md-4'>
            <div className='card p2 border'>
            <img className='w-50 m-auto' src={product.image} alt={product.title} />
            <h2>{product.title.slice(0,10)}</h2>
            <div className='d-flex justify-content-around'>
                <button onClick={setCartCount} className='btn btn-success'>Add to Cart</button>
                <button className='btn btn-danger'>Delete</button>
                <ReactModal product={product}></ReactModal>
            </div>
            </div>
        </div>
    );
};

export default SingleProduct;