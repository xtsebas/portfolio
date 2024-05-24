import React from "react";
import { Link } from "react-router-dom";

import './Sidebar.css';

const Sidebar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">About me</Link>
                </li>
                <li>
                    <Link to="/Resume">Resume</Link>
                </li>
                <li>
                    <Link to="/Work">Works</Link>
                </li>
                <li>
                    <Link to="/Contactme">Contact me</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;