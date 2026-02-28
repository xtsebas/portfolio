import React from "react";
import { useTranslation } from 'react-i18next';

import NavBar from "../../components/NavBar/NavBar";
import Card from "../../../shared/Cards/Card";
import calculator from "../../../assets/calculator.gif";
import animeBlog from "../../../assets/animeblog.gif";
import "./General.css";

const Web = props => {
    const { t } = useTranslation();
    const projects = t('works.web', { returnObjects: true });
    const visitSite = t('works.buttons.visitSite');
    const sourceCode = t('works.buttons.sourceCode');

    return (
        <article className="article">
            <NavBar />
            <div className="Cards">
                <Card
                    media={animeBlog}
                    title={projects[0].title}
                    description={projects[0].description}
                    tech={projects[0].tech}
                    toWeb={'https://663ab7948680e97bea0bbf34--ephemeral-dieffenbachia-a772c8.netlify.app/#/login'}
                    buttonWeb={visitSite}
                    toRep={'https://github.com/xtsebas/Blog'}
                    buttonRep={sourceCode}
                />
                <Card
                    media={calculator}
                    title={projects[1].title}
                    description={projects[1].description}
                    tech={projects[1].tech}
                    toWeb={'https://calculatortesting74.netlify.app/'}
                    buttonWeb={visitSite}
                    toRep={'https://github.com/xtsebas/calculator-testing'}
                    buttonRep={sourceCode}
                />
            </div>
        </article>
    );
};

export default Web;
