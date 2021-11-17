import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import {productArray} from "../initialValues/InitialValues";
import "../styles/Products.css";


export default function Products() {
    const [prices, setPrices] = useState(productArray);
    const [isNorthToggled, setIsNorthToggled] = useState(false);
    const [isCentralToggled, setIsCentralToggled] = useState(false);
    const [isSouthToggled, setIsSouthToggled] = useState(false);


    useEffect(() => {
        axios.get("https://")
            .then(res => {
                setPrices(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, []);


    const onClickNorth = evt => {
        setIsNorthToggled(!isNorthToggled);
        setIsCentralToggled(false);
        setIsSouthToggled(false);
    }
    const onClickCentral = evt => {
        setIsCentralToggled(!isCentralToggled);
        setIsNorthToggled(false);
        setIsSouthToggled(false);

    }
    const onClickSouth = evt => {
        setIsSouthToggled(!isSouthToggled);
        setIsNorthToggled(false);
        setIsCentralToggled(false);
    }

    return(
        <div className="products-container">
            <div className="regions">
                <h1>Regions</h1>
                <div className="locations">
                    <h3 onClick={onClickNorth}>North Africa</h3>
                    <h3 onClick={onClickCentral}>Central Africa</h3>
                    <h3 onClick={onClickSouth}>South Africa</h3>
                </div>

            </div>
            <div className="products-map">
            {   isNorthToggled &&
                prices.map((price, i) => {
                    return  (price.location === "North Africa") &&  <Product key={i} price={price}  />

                })
            }
            {   isCentralToggled &&
                prices.map((price, i) => {
                    return  (price.location === "Central Africa") &&  <Product key={i} price={price}  />

                })
            }
            {   isSouthToggled &&
                prices.map((price, i) => {
                    return  (price.location === "South Africa") &&  <Product key={i} price={price}  />

                })
            }
            </div>
        </div>
    );
};













































