import React from "react";

import './Experience.css';

const Experience = props => {
    return (
        <div className="excard">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    );
};

export default Experience;