import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const HomeContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let i=1; i<PRODUCTS.length+1; i++){
        cart[i] = 0;
    }
    return cart;
}
export const HomeContextProvider = (props) =>{
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item)); 
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }; 

    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}));
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    };
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) =>({...prev, [itemId]: newAmount}));
    }
    const deleteItemFromCart = (itemId) => {
        setCartItems((prev) =>({...prev, [itemId]: 0}));
    };

    const contextValue = {cartItems, addToCart, removeFromCart,updateCartItemCount, getTotalCartAmount, deleteItemFromCart };

    console.log(cartItems);
    return (<HomeContext.Provider value={contextValue}>{props.children}</HomeContext.Provider>)
};