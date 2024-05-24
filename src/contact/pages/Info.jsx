import React from "react";

import './Info.css';
import profileImage from '../../assets/profile.jpg';
import Button from '../../shared/Button/Button';

const Info = props => {
    return (
        <aside>
            <img src={profileImage} />
            <h3>Sebastian Huertas</h3>
            <p className="profession" >Junior Programmer</p>
            <p>redes</p>
            <p>contacto</p>
            <Button text="Download CV " />
        </aside>
    );
};

export default Info;