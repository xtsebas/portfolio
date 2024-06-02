import React from "react";

import './Skills.css';

const Skills = props => {
    return (
        <div className="skill">
            <h2>{props.title}</h2>
            <lu>
                {props.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </lu>
        </div>
    );
};

export default Skills;