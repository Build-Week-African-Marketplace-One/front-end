import React, { useState } from "react";
import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";
import {signupInitialValues} from "../initialValues/InitialValues";
import "../styles/SignUp.css"
import * as yup from 'yup';
import { initialFormErrors } from '../initialValues/InitialValues';


export default function SignUp() {
    const [formValues, setFormValues] = useState(signupInitialValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);

    const onChange = evt => {
        console.log(evt.target.value)
        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.value
        });
        console.log(formValues);
    };

    const onSubmit = evt => {
        evt.preventDefault();
        console.log(formValues)
    }

    return (
        <div className="signup-container">
            <form id="signup-form" onSubmit={onSubmit}>
                <div className= "signup-header">
                    <h1>Create An Account</h1>
                    <a href="/login" style={{ textDecoration: 'none', color: 'lightgrey' }}>
                        Already have an account?
                    </a>
                </div>
                <div className="signup-input-container">
                    <label htmlFor="username">Username:&nbsp;</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            onChange={onChange}
                        />
                    <label htmlFor="firstName">First Name:&nbsp;</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={onChange}
                    />
                    <label htmlFor="lastName">Last Name:&nbsp;</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={onChange}
                    />
                    <label htmlFor="businessName">Business Name:&nbsp;</label>
                    <input
                        type="text"
                        name="businessName"
                        id="businessName"
                        onChange={onChange}
                    />
                    <label htmlFor="jobTitle">Job Title:&nbsp;</label>
                    <input
                        type="text"
                        name="jobTitle"
                        id="jobTitle"
                        onChange={onChange}
                    />
                    <label htmlFor="password">Password:&nbsp;</label>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        onChange={onChange}
                    />
                    {/*<label htmlFor="avatarImg">Profile Picture:&nbsp;</label>*/}
                    {/*<input*/}
                    {/*    type="file"*/}
                    {/*    name="avatarImg"*/}
                    {/*    accept="image/png, image/jpeg, image/jpg"*/}
                    {/*    onChange={onChange}*/}
                    {/*/>*/}
                </div>
                <button>Submit</button>
            </form>
        </div>

    )


}
