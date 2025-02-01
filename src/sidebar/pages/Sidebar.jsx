import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Sidebar.css';

const Sidebar = () => {
    const location = useLocation();

    return (
        <nav className="sidebar">
            <ul>
                <li><h2>Xtsebas</h2></li>
                <li>
                    <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                        <FontAwesomeIcon className="icon" icon={faUser} style={{ marginRight: '10px' }} />
                        <span className="sidebar-text">About Me</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Resume" className={location.pathname === "/Resume" ? "active" : ""}>
                        <FontAwesomeIcon className="icon" icon={faFileAlt} style={{marginRight: '10px'}} />
                        <span className="sidebar-text">Resume</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Work" className={location.pathname.startsWith("/Work") ? "active" : ""}>
                        <FontAwesomeIcon className="icon" icon={faCode} style={{marginRight: '10px'}} />
                        <span className="sidebar-text">Works</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Contactme" className={location.pathname === "/Contactme" ? "active" : ""}>
                        <FontAwesomeIcon className="icon" icon={faEnvelope} style={{marginRight: '10px'}} />
                        <span className="sidebar-text">Contact Me</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;