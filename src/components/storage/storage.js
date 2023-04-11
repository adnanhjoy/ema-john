const setStorage = ({id}) => {
    let shoppingCart = {};

    const storCart = localStorage.getItem('shopping-cart');
    if(storCart){
        shoppingCart = JSON.parse(storCart)
    }

    let quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getStoreCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getStoreCart = () => {
    let shoppingCart = {};

    const storCart = localStorage.getItem('shopping-cart');
    if(storCart){
        shoppingCart = JSON.parse(storCart)
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {setStorage, getStoreCart, removeFromDb, deleteShoppingCart}