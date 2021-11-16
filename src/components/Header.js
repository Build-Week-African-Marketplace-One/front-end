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
                <Link to="/" style={{ textDecoration: 'none', color: 'lightgrey' }}  >Home</Link>
                {!localStorage.getItem("token") &&
                    <Link to="/login" style={{textDecoration: 'none', color: 'lightgrey'}}>Login</Link>}
                <Link to="/products" style={{ textDecoration: 'none', color: 'lightgrey' }}>Products</Link>
                <Link to="/user" style={{ textDecoration: 'none', color: 'lightgrey' }}>User</Link>
                {!localStorage.getItem("token") &&
                    <Link to="/signup" style={{textDecoration: 'none', color: 'lightgrey'}}>Sign Up</Link>}
                {localStorage.getItem("token") &&
                    <a href="/" onClick={logout} style={{textDecoration: 'none', color: 'lightgrey'}}>Logout</a>}
            </nav>
        </div>
    )
}













































