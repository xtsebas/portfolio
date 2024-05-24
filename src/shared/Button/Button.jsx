import React from "react";

import './Button.css';

const Button = props => {
    return (
        <button className="button" onClick={props.onClick}>
            {props.text}
            {props.icon && <span className="icon">{props.icon}</span>}
        </button>
    );
};

export default Button;