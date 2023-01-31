import React, {useContext} from "react";
import { HomeContext } from "../../context/home-context";
import {Trash} from "phosphor-react";

export const CartItem = (props) =>{
    const {id, productName, price, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount, deleteItemFromCart} = useContext(HomeContext)
    
    return(
    <div className="cartItem">
        <img src={productImage}></img>
        <div className="description">
            <p className="productName">
                <b>{productName}</b>
            </p>
            <p className="productPrice">
                ${price}
            </p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(event) => updateCartItemCount(Number(event.target.value), id)}></input>
                <button onClick={() => addToCart(id)}>+</button>
            </div>
            <div className="deleteItem">
                <Trash size={32} onClick={() => deleteItemFromCart(id)} />
            </div>
        </div>
    </div>
    
    ) 
}