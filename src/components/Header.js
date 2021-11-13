import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {


    return(
        <div className="header">
            <nav className="header-navs">
                <Link to="/" style={{ textDecoration: 'none', color: 'lightgrey' }}  >Home</Link>
                <Link to="/login" style={{ textDecoration: 'none', color: 'lightgrey' }}>Login</Link>
                <Link to="/logout" style={{ textDecoration: 'none', color: 'lightgrey' }}>Logout</Link>
            </nav>
        </div>
    )

}













































