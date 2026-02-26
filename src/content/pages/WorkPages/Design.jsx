import React from "react";
import { useTranslation } from 'react-i18next';

import NavBar from "../../components/NavBar/NavBar";
import Card from "../../../shared/Cards/Card";
import smartyou from "../../../assets/smartyou.gif";

const Design = props => {
    const { t } = useTranslation();
    const projects = t('works.design', { returnObjects: true });
    const visitSite = t('works.buttons.visitSite');

    return (
        <article className="article">
            <NavBar />
            <div className="Cards">
                <Card
                    media={smartyou}
                    title={projects[0].title}
                    description={projects[0].description}
                    tech={projects[0].tech}
                    toWeb={'https://www.figma.com/design/nPe4kJxMps3G8JhWo7oTrp/SmartYou?node-id=0-1&t=z2sFgJSrduTrrl0R-1'}
                    buttonWeb={visitSite}
                />
            </div>
        </article>
    );
};

export default Design;
