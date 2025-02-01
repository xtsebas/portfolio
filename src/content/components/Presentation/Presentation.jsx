import React from "react";

import './Presentation.css';

const Presentation = props => {
    return (
        <div className="cardpres">
            <div className="card-content">
                <img src={props.image} alt="Product Image" className="card-image" />
                <div className="text-content">
                    <p className="card-title">{props.title}</p>
                    <p className="small-desc">{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Presentation;
