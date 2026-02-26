import React from "react";
import { useTranslation } from 'react-i18next';

import './Form.css';
import Button from "../../../shared/Button/Button";

const Form = props => {
    const { t } = useTranslation();

    return (
        <div className="form-card1">
            <div className="form-card2">
                <form className="form">
                    <p className="form-heading">{t('contactme.title')}</p>

                    <div className="form-field">
                        <input
                        required=""
                        placeholder={t('contactme.form.email')}
                        className="input-field"
                        type="email"
                        />
                    </div>

                    <div className="form-field">
                        <input
                        required=""
                        placeholder={t('contactme.form.subject')}
                        className="input-field"
                        type="text"
                        />
                    </div>

                    <div className="form-field">
                        <textarea
                        required=""
                        placeholder={t('contactme.form.message')}
                        cols="30"
                        rows="3"
                        className="input-field"
                        ></textarea>
                    </div>

                    <Button text={t('contactme.form.send')} />
                </form>
            </div>
        </div>
    );
};

export default Form;
