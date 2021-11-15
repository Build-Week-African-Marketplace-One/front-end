import React, { useState, useEffect } from "react";
import { pricesInitialValues } from "../initialValues/InitialValues";
import axios from "axios";

import Product from "./Product";


export default function Products() {
    const [prices, setPrices] = useState(pricesInitialValues);

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
        <div>
            {
                prices.map((price, i) => {
                    return <Product key={i} price={price}  />
                })
            }
        </div>
    )


}













































