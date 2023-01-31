import React from "react";
import {PRODUCTS} from "../../products";
import {Product} from "./product";
import "./home.css";

export const Home = () =>{
    return (
    <div className="home">
        <div className="shopTitle">
            <h1>Shop</h1>
        </div>
        <div className="products">
            {" "}
        {PRODUCTS.map((product) => {
            return <Product data={product}/>
        })}

        </div>
    </div>
    );
};