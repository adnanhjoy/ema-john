import { getStoreCart } from "../components/storage/storage";

export const productCartLoader = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    const storedCart = getStoreCart();
    const savedCart = [];
    for(const id in storedCart){
        const addedProducts = products.find(product => product.id === id);
        if(addedProducts){
            const quantity = storedCart[id];
            addedProducts.quantity = quantity;
            savedCart.push(addedProducts);
        }
    }
    return savedCart;
}