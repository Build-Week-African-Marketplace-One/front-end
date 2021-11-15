import React, {useState} from "react";
import {newInitialValues} from "../initialValues/InitialValues";


export default function NewProduct() {
    const [newProduct, setNewProduct] = useState(newInitialValues);

    const onChange = evt => {
        inputChange(evt.target.name, evt.target.value)
    }

    const inputChange = (name, value) => {
        setNewProduct({
            ...newProduct,
            [name]: value
        })
        console.log(newProduct);
    }

    const onSubmit = evt =>{
        evt.preventDefault();
        console.log(newProduct)
    }



    return(
        <form className="new-product-container" onSubmit={onSubmit}>
            <div className="new-product-header">
                <h2>Add New Product</h2>
            </div>
            <div className="new-product-inputs">
                <label htmlFor="productName">Product:&nbsp;</label>
                <input
                    type="text"
                    name="productName"
                    onChange={onChange}
                />
                <label htmlFor="productDescription">Description:&nbsp;</label>
                <input
                    type="text"
                    name="productDescription"
                    onChange={onChange}
                />
                <label htmlFor="productPrice">Price:&nbsp;</label>
                <input
                    type="text"
                    name="productPrice"
                    onChange={onChange}
                />

            </div>
            <button>Submit</button>


        </form>
    )

}














































