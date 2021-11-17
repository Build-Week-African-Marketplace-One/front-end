import React from "react";


export default function UserInfo(props) {
    const {user} = props;

    return(
        <div>
            <div>
                <p>Name:&nbsp;{user.firstName}&nbsp;{user.lastName}</p>
                <p>Business Name:&nbsp;{user.businessName} </p>
                <p>Job Title:&nbsp;{user.businessName} </p>
            </div>
        </div>
    )


}













































