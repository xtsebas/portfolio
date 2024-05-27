import React from "react";
import { useState } from "react";

import './Principal.css';
import NavBar from "../components/NavBar/NavBar";

const Works = props => {
    const [title, setTitle] = useState("");

    if (location.pathname === "/Work" || location.pathname === "/Work/Web") {
        setTitle("Web");
    } else if (location.pathname === "/Work/Repositories") {
        setTitle("Repositories");
    } else if (location.pathname === "/Work/Design") {
        setTitle("Design");
    }

    return (
        <article>
            <NavBar title={title} />
        </article>
    );
};

export default Works;