import React from "react";
import "../styles/ProductInfo.css";

export default function ProductInfo(props) {
    const {price} = props;

    return(
        <div className="info-container">
            <img src="https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?ixid=MnwxMj
            A3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80" alt="banana"/>
            <p className="product-description">
                {price.productDescription}
            </p>
            <p className="product-price">
                {price.productPrice}
            </p>
        </div>
    );
};













































