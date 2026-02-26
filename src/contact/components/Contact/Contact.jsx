import React from "react";
import { useTranslation } from 'react-i18next';

import Button from "../../../shared/Button/Button";

const Contact = props => {
  const { t } = useTranslation();

  return (
    <>
        <p>{t('contact.email')} <br/> {t('contact.phone')}</p>
        <Button text={t('contact.downloadCV')} onClick={props.onClick} />
    </>
  );
};

export default Contact;
