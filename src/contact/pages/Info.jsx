import React from "react";

import './Info.css';
import Me from "../components/Me/Me";
import Socialmedia from "../components/Socialmedia/Socialmedia";
import Contact from "../components/Contact/Contact";

const Info = props => {

    const handleClick = () => {
        const link = document.createElement('a');
        link.href = '../../assets/ingles.pdf'; 
        link.download = 'Sebastiancv.pdf';
        link.click();
    };

    return (
        <aside>
            <Me />
            <Socialmedia />
            <Contact onClick={handleClick} />
        </aside>
    );
};

export default Info;