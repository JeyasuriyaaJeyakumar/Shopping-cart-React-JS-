import React, { useContext } from "react";
import { HomeContext } from "../../context/home-context";
import {useNavigate} from "react-router-dom";


export const Product = (props) =>{
    const {id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(HomeContext);

    const navigate = useNavigate(); 

    const cartItemCount = cartItems[id];
    return (
    <div className="product">
       <img src={productImage}></img> 
       <div className="description">
           <p>
               <b>{productName}</b>
           </p>
           <p>${price}</p>
       </div>
       <button className="addtoCartBtn" id="addtoCartBtn" onClick={()=>addToCart(id)}>Add to cart{cartItemCount > 0 && <>({cartItemCount})</>}</button>
    </div>
        )
}