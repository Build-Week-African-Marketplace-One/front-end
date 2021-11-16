import React, { useState } from "react";
import {signupInitialValues} from "../initialValues/InitialValues";
import "../styles/SignUp.css"
import * as yup from 'yup';
import { initialFormErrors } from '../initialValues/InitialValues';
import  schema  from '../validations/formSchema';
import axios from "axios";

export default function SignUp() {
    const [formValues, setFormValues] = useState(signupInitialValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const values = formValues;


    const postNewUser = newUser => {
        axios.post("https://", newUser)
             .then(res => {
                setFormValues(signupInitialValues);
             })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                window.location.href = "/";
            })
    }


    const validation = (name, value) => {
      yup.reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''});
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]});
      })
    }

    const onChange = evt => {
        validation(evt.target.name, evt.target.value);
        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.value
        });
    };

    const formSubmit = () => {
        const newUser ={
            username: values.username.trim(),
            firstName: values.firstName.trim(),
            lastName: values.lastName.trim(),
            businessName: values.businessName.trim(),
            jobTitle: values.jobTitle.trim(),
            avatarImg: values.avatarImg.trim(),
            password: values.password.trim()
        };
        postNewUser(newUser);

    };

    const onSubmit = evt => {
        evt.preventDefault();
        formSubmit();
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
                    <div className='form-errors'>
                      <p>{formErrors.username}</p>
                      <p>{formErrors.firstName}</p>
                      <p>{formErrors.lastName}</p>
                      <p>{formErrors.businessName}</p>
                      <p>{formErrors.jobTitle}</p>
                      <p>{formErrors.avatarImg}</p>
                      <p>{formErrors.password}</p>
                    </div>
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
