import React from "react";

import './Me.css';
import profileImage from '../../../assets/profile.jpg';

const Me = props => {
    return (
        <>
            <img src={profileImage} />
            <h3>Sebastian Huertas</h3>
            <p className="profession" >Junior Programmer</p>
        </>
    );
};

export default Me;