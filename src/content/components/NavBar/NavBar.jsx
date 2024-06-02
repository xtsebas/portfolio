import React from "react";
import { Link } from "react-router-dom";

import './NavBar.css';

const NavBar = props => {
    return (
        <nav className="navbar"> 
                <h2>Portfolio</h2>
            <ul>
                <li>
                    <Link to="/Work/Web" className={location.pathname === "/Work" || location.pathname === "/Work/Web" ? "active" : ""}>Web</Link>
                </li>
                <li> / </li>
                <li>
                    <Link to="/Work/Repositories" className={location.pathname === '/Work/Repositories' ? "active" : ""}>Repositories</Link>
                </li>
                <li> / </li>
                <li>
                    <Link to="/Work/Design" className={location.pathname === '/Work/Design' ? "active" : ""}>Design</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;