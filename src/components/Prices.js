import React, {useState} from "react";
import Price from "./Price";

const product1 = {

    productName: "Banana",
        productPrice: "$10",

}
const product2 = {

    productName: "Banana",
        productPrice: "$10",

}
const product3 = {

    productName: "Banana",
        productPrice: "$10",

}


const initialValues = [product1, product2, product3]



export default function Prices(props) {
    const [prices, setPrices] = useState(initialValues);
    const {} = props;


    return(
        <div>
            {
                prices.map((price, i) => {
                    return <Price key={i} price={price}  />
                })
            }
        </div>
    )


}













































