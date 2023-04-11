import React from 'react';
import './Product.css';

const Product = (props) => {
    const {addToCart, product} = props
   const {img, name, price, seller, ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <h4>Price: ${price}</h4>
                <p>Seller: {seller}</p>
                <p>Ratings {ratings} starts</p>
            </div>
            <button onClick={() => addToCart(product)} className='btn-cart'><p>Add to Cart</p></button>
        </div>
    );
};

export default Product;