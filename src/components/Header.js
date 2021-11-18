import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/" ;
    };

    const token =()=>{
        localStorage.setItem("token", "token");
    };

    token();

    return(
        <div className="header">
            <nav className="header-navs">
                <Link id="home" to="/"   >Home</Link>

                <Link id="products" to="/products" >Products</Link>
                {!localStorage.getItem("token") &&
                <Link id="login" to="/login">Login</Link>}
                {localStorage.getItem("token") &&
                    <Link id="user" to="/user">User</Link>}
                {!localStorage.getItem("token") &&
                    <Link id="signup" to="/signup">Sign Up</Link>}
                {localStorage.getItem("token") &&
                    <a id="logout" href="/" onClick={logout}>Logout</a>}
            </nav>
        </div>
    )
};













































