import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/Work/Web">Web</Link>
                </li>
                <li>
                    <Link to="/Work/Repositories">Repositories</Link>
                </li>
                <li>
                    <Link to="/Work/Design">Design</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;