import React from "react";

import './Card.css';
import Button from "../Button/Button";

const Card = props => {
    const techArray = props.tech.split(', ');

    return (
        <div className="card">
            <div className="media-container">
                <img src={props.media} alt="profile" />
            </div>
            <div className="details">
                <label>{props.title}</label>
                <p>{props.description}</p>
                <div className="tech-container">
                    {techArray.map((tech, index) => (
                        <span key={index} className="tech-badge">{tech}</span>
                    ))}
                </div>
                <div className="buttons">
                    {props.buttonWeb && <Button to={props.toWeb} text={props.buttonWeb} />}
                    {props.buttonRep && <Button to={props.toRep} text={props.buttonRep} />}
                </div>
            </div>
        </div>
    );
};

export default Card;