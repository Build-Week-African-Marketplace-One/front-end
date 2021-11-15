import React from "react";



export default function Price(props) {
    const {price} = props;

    return(
        <div className="price-container">
            <h1>{price.productName}</h1>
            <p>{price.productPrice}</p>
        </div>
    )
}












































