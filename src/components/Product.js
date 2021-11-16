import React from "react";
import "../styles/Product.css"


export default function Product(props) {
    const {price} = props;

    return(
        <div className="price-container">
            <h1>{price.productName}</h1>
            <p>{price.productPrice}</p>
        </div>
    )
}












































