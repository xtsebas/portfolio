import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './Principal.css';
import NavBar from "./NavBar";
import Web from "./WorkPages/Web";
import Repositories from "./WorkPages/Repositories";
import Design from "./WorkPages/Design";

const Works = props => {
    return (
        <article>
            <NavBar />
        </article>
    );
};

export default Works;