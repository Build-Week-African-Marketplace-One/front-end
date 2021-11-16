import React, { useState, useEffect } from "react";
import { pricesInitialValues } from "../initialValues/InitialValues";
import axios from "axios";

import Product from "./Product";
import "../styles/Products.css"

export default function Products() {
    const [prices, setPrices] = useState(pricesInitialValues);
    console.log(prices)
    useEffect(() => {
        axios.get("https://")
            .then(res => {
                setPrices(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, []);


    return(
        <div className="products-container">
            {
                prices.map((price, i) => {
                    return <Product key={i} price={price}  />
                })
            }
        </div>
    )


}













































