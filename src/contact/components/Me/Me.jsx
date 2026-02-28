import React from "react";
import { useTranslation } from 'react-i18next';

import './Me.css';
import profileImage from '../../../assets/profile.jpg';

const Me = props => {
    const { t } = useTranslation();

    return (
        <>
            <img src={profileImage} />
            <h3>{t('contact.name')}</h3>
            <p className="profession">{t('contact.profession')}</p>
        </>
    );
};

export default Me;
