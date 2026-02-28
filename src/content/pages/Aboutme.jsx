import React from "react";
import { useTranslation } from 'react-i18next';

import './Principal.css';
import Presentation from "../components/Presentation/Presentation";
import rocket from "../../assets/rocket.jpg";
import volleyball from "../../assets/volleyball.jpg";
import puzzle from "../../assets/puzzle.jpg";
import manga from "../../assets/manga.jpg";
import rubik from "../../assets/rubik.jpg";

const Aboutme = props => {
    const { t } = useTranslation();
    const whatIDo = t('aboutme.whatIDo.items', { returnObjects: true });
    const hobbies = t('aboutme.hobbies.items', { returnObjects: true });

    return (
        <article className="article">
            <div className="header">
                <h1>{t('aboutme.title')}</h1>
                <div className="line"></div>
            </div>
            <p>{t('aboutme.bio')}</p>
            <div className="ido">
                <h2>{t('aboutme.whatIDo.title')}</h2>
                <Presentation
                    title={whatIDo[0].title}
                    description={whatIDo[0].description}
                />
                <Presentation
                    title={whatIDo[1].title}
                    description={whatIDo[1].description}
                />
                <Presentation
                    title={whatIDo[2].title}
                    image={rubik}
                    description={whatIDo[2].description}
                />
                <Presentation
                    title={whatIDo[3].title}
                    description={whatIDo[3].description}
                />
            </div>
            <div className="hobbies">
                <h2>{t('aboutme.hobbies.title')}</h2>
                <Presentation
                    title={hobbies[0].title}
                    image={volleyball}
                    description={hobbies[0].description}
                />
                <Presentation
                    title={hobbies[1].title}
                    image={puzzle}
                    description={hobbies[1].description}
                />
                <Presentation
                    title={hobbies[2].title}
                    image={rocket}
                    description={hobbies[2].description}
                />
                <Presentation
                    title={hobbies[3].title}
                    image={manga}
                    description={hobbies[3].description}
                />
            </div>
        </article>
    );
};

export default Aboutme;
