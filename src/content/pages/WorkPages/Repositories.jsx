import React from "react";
import { useTranslation } from 'react-i18next';

import NavBar from "../../components/NavBar/NavBar";
import Card from "../../../shared/Cards/Card";
import apibloganime from "../../../assets/apibloganime.png";
import infixtopostfix from "../../../assets/infixtopostfix.png";
import "./General.css";

const Repositories = props => {
    const { t } = useTranslation();
    const projects = t('works.repositories', { returnObjects: true });
    const sourceCode = t('works.buttons.sourceCode');

    return (
        <article className="article">
            <NavBar />
            <div className="Cards">
                <Card
                    media={apibloganime}
                    title={projects[0].title}
                    description={projects[0].description}
                    tech={projects[0].tech}
                    toRep={'https://github.com/xtsebas/Blog_anime'}
                    buttonRep={sourceCode}
                />
                <Card
                    media={infixtopostfix}
                    title={projects[1].title}
                    description={projects[1].description}
                    tech={projects[1].tech}
                    toRep={'https://github.com/Gxrco/CalculatorPostFix.git'}
                    buttonRep={sourceCode}
                />
            </div>
        </article>
    );
};

export default Repositories;
