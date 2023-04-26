import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../storage/storage';

const Order = () => {
    const orders = useLoaderData();
    const [cart, setCart] = useState(orders);

    const deleteReview = id => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        deleteReview={deleteReview}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to='/shipping'><button>Proceed Shipping</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;