import React, {useState} from "react";
import NewProduct from "./NewProduct";
import {findAllByDisplayValue} from "@testing-library/react";

export default function User(props) {
    const { user } = props;
    const [isToggled, setIsToggled] = useState(false);

   const onClick = () => {
        setIsToggled(!isToggled);
    }

    return(
        <div>
            <div>
            <div className="user-info">
                <h2>User Name Here</h2>
                <p>Export Exec</p>
            </div>
                <button onClick={onClick}>New Product</button>
            </div>
        {
            isToggled && <NewProduct setIsToggled={setIsToggled} isToggled={isToggled}/>
        }
        </div>

    )
}
