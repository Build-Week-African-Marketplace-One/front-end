import React, { useState, useEffect } from "react";
import { pricesInitialValues } from "../initialValues/InitialValues";
import axios from "axios";

import Price from "./Price";


export default function Prices() {
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
                    return <Price key={i} price={price}  />
                })
            }
        </div>
    )


}













































