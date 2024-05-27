import React from "react";

import './Button.css';

const Button = props => {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick();
        }
        if (props.to) {
            window.open(props.to, '_blank', 'noopener,noreferrer');
        }
    };
    return (
        <button className="button" onClick={handleClick}>
            {props.text}
            {props.icon && <span className="icon">{props.icon}</span>}
            <a href={props.to} target="_blank" rel="noreferrer"/>
        </button>
    );
};

export default Button;