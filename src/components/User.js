import React, {useState} from "react";
import NewProduct from "./NewProduct";


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
                <p>World Commodities Inc.</p>
                <p>CEO</p>
            </div>
                <button onClick={onClick}>Add New Product</button>
            </div>
        {
            isToggled && <NewProduct setIsToggled={setIsToggled} isToggled={isToggled}/>
        }
        </div>

    )
}
