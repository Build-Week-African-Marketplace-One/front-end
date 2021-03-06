import React, {useState} from "react";
import "../styles/Product.css";
import ProductInfo from "./ProductInfo";

export default function Product(props) {
    const [isToggled, setIsToggled] = useState(false);
    const {price} = props;

    const onClick = evt => {
        setIsToggled(!isToggled);
    }

    return(
        <div className="product-container">
            <h1 onClick={onClick} className="product-name">
                {price.productName}
            </h1>
            {isToggled && <ProductInfo price={price}/>}
        </div>
    );
};













































