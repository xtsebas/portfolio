import React from "react";

import './Form.css';
import Button from "../../../shared/Button/Button";

const Form = props => {
    return (
        <div class="form-card1">
            <div class="form-card2">
                <form class="form">
                    <p class="form-heading">Get In Touch</p>
                    
                    <div class="form-field">
                        <input
                        required=""
                        placeholder="Email"
                        class="input-field"
                        type="email"
                        />
                    </div>

                    <div class="form-field">
                        <input
                        required=""
                        placeholder="Subject"
                        class="input-field"
                        type="text"
                        />
                    </div>

                    <div class="form-field">
                        <textarea
                        required=""
                        placeholder="Message"
                        cols="30"
                        rows="3"
                        class="input-field"
                        ></textarea>
                    </div>

                    <Button text={'Send Message'} />
                </form>
            </div>
        </div>

    );
};

export default Form;