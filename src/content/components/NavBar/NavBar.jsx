import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import './NavBar.css';

const NavBar = props => {
    const { t } = useTranslation();

    return (
        <nav className="navbar">
                <h2>Portfolio</h2>
            <ul>
                <li>
                    <Link to="/Work/Web" className={location.pathname === "/Work" || location.pathname === "/Work/Web" ? "active" : ""}>{t('works.nav.web')}</Link>
                </li>
                <li> / </li>
                <li>
                    <Link to="/Work/Repositories" className={location.pathname === '/Work/Repositories' ? "active" : ""}>{t('works.nav.repositories')}</Link>
                </li>
                <li> / </li>
                <li>
                    <Link to="/Work/Design" className={location.pathname === '/Work/Design' ? "active" : ""}>{t('works.nav.design')}</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
