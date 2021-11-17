import React, {useState, useEffect} from "react";
import NewProduct from "./NewProduct";
import {newUser} from "../initialValues/InitialValues";
import axiosWithAuth from "./axiosWithAuth/axiosWithAuth";
import UserInfo from "./UserInfo";


export default function User(props) {
    // const { user }  = props;
    const [user, setUser] = useState(newUser);
    const [isToggled, setIsToggled] = useState(false);
    const [userInfoToggle, setUserToggle] = useState(false)

    useEffect(() => {
        axiosWithAuth().get("https://")
                        .then( res => {
                            setUser(res.data);
                        })
                        .catch(err => {
                            console.error(err);
                        })
    },[]);


   const onClick = evt => {
        setIsToggled(!isToggled);
        setUserToggle(false);
    };

    const infoOnClick = evt => {
        setUserToggle(!userInfoToggle);
        setIsToggled(false);
    }

    const reset = () => {
        setUserToggle(false);
        setIsToggled(false);
    }


    return(
            <div>
                <div className="user-img">
                    <img src={user.avatarImg} alt="James Howlett"/>
                </div>
            <div className="user-info">

                <h2 onClick={reset}>{user.username}</h2>
                <button onClick={infoOnClick}>Profile Details</button>
                <button onClick={onClick}>Add New Product</button>
            </div>
            <div className="details-buttons">
            {
                userInfoToggle && <UserInfo user={user}/>
            }
        {
            isToggled && <NewProduct setIsToggled={setIsToggled} isToggled={isToggled}/>
        }
            </div>
        </div>
    );
};
