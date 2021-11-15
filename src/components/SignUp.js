import React, { useState } from "react";
import {Link} from "react-router-dom";

const initialValues = {
    username: "",
    firstName: "",
    lastName: "",
    businessName:"",
    jobTitle: "",
    avatarImg: ""
}




export default function SignUp() {
    const [formValues, setFormValues] = useState(initialValues);


    const onChange = evt => {
        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.value
        });
        console.log(formValues);
    };

    return (
        <div className="signup-container">
            <form id="signup-form">
                <div className= "signup-header">
                    <h1>Create An Account</h1>
                    <Link to="/login" style={{ textDecoration: 'none', color: 'lightgrey' }}>
                        Already have an account?
                    </Link>
                </div>
                <div className="signup-input-container">
                    <label htmlFor="username">Username:&nbsp;
                        <input
                            type="text"
                            name="username"
                            id="username"
                            onChange={onChange}
                        />
                    </label>
                </div>
            </form>
        </div>

    )


}















































