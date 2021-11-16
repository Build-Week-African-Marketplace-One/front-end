import React, {useState} from "react";
import {useHistory} from "react-router";
import axios from "axios";
import {loginInitialValues} from "../initialValues/InitialValues";

export default function Login() {
    const [formValues, setFormValues] = useState(loginInitialValues);
    const { push } = useHistory()

    const onChange = evt => {
        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.value
        });
    };


    const onSubmit = (evt) => {
        evt.preventDefault();
        axios.post("https://", formValues)
            .then(res => {
                console.log(res.data.token);
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                setFormValues(loginInitialValues);
                push("/")
            })
    }


    return(
        <div className="login-container">
        <form id="login-form" onSubmit={onSubmit}>
            <div className= "login-header">
                <h1>Login</h1>
            </div>
            <div className="login-input-container">
                <label htmlFor="username">Username:&nbsp;
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={onChange}
                    />
                </label>
                <label htmlFor="password">Password:&nbsp;
                    <input
                        type="password"
                        name="password"
                        id="username"
                        onChange={onChange}
                    />
                </label>

            </div>
            <div className="login-button">
                <button>Login</button>
            </div>
        </form>
        </div>
            )
}
















































