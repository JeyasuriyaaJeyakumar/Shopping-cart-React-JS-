import React, {useContext} from "react";
import {PRODUCTS} from "../../products";
import { HomeContext } from "../../context/home-context";
import {CartItem} from "./cart-item";
import {useNavigate} from "react-router-dom"; 
import "./cart.css";

export const Cart = () =>{
 
    const { cartItems, getTotalCartAmount} = useContext(HomeContext);

    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate(); 

    return( <div className="cart">
            <div className="title">
            <h1>Shopping Cart</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product)=>{
                    if (cartItems[product.id]){
                         return <CartItem data={product}></CartItem>
                    }
                })}
            </div>
            {totalAmount > 0 ? (
            <div className="checkout">
                <p>Subtotal: ${totalAmount}</p>
                <button onClick={() => navigate("/")}>Continue Shopping</button>
            </div>
            ): (
                <h2 className="alert">Your cart is empty</h2>
            ) }

        </div>
    );
};