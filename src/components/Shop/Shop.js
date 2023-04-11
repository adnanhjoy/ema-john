import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { getStoreCart, setStorage } from '../storage/storage';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect( () => {
        const sortedCart = getStoreCart();
        const savedCart = [];
        for(const id in sortedCart){
            const getProduct = products.find(product => product.id === id);
            if(getProduct){
                const quantity = sortedCart[id];
                getProduct.quantity = quantity;
                savedCart.push(getProduct)
            }
        }
        setCart(savedCart)
    },[products])

    const addToCart = product => {
        let newCart = [];
        const exixt = cart.find(selecProduct => selecProduct.id === product.id);
        if(!exixt){
            product.quantity =1;
            newCart = [...cart, product];
        }
        else{
            const rest = cart.filter(selecProduct => selecProduct.id !== product.id);
            exixt.quantity = exixt.quantity +1;
            newCart = [...rest, exixt];
        }
        setCart(newCart);
        setStorage(product)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;