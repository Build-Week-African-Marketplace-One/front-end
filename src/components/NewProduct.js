import React, {useState} from "react";
import {newInitialValues} from "../initialValues/InitialValues";
import axios from 'axios';

export default function NewProduct(props) {
    const { setIsToggled, isToggled } = props;
    const [newProduct, setNewProduct] = useState(newInitialValues);
    const [formValues, setFormValues] = useState();

    const postNewProduct = (newProduct) => {

        axios.post('', newProduct)
            .then(res => {
                console.log(res.data);
                setNewProduct(newProduct);
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() =>{
                setFormValues(newInitialValues);
                setIsToggled(!isToggled);
            });
    };

    const onChange = evt => {
        inputChange(evt.target.name, evt.target.value);
    };

    const inputChange = (name, value) => {
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const onSubmit = evt =>{
        evt.preventDefault();
        const newProduct = {
          productName: formValues.productName,
          productDescription: formValues.productDescription,
          productPrice: formValues.productPrice
        }

        postNewProduct(newProduct);
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
                <label htmlFor="productDescription">&nbsp;Description:&nbsp;</label>
                <input
                    type="text"
                    name="productDescription"
                    onChange={onChange}
                />
                <label htmlFor="productPrice">&nbsp;Price:&nbsp;</label>
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
