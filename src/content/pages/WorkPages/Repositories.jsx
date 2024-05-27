import react from "react";

import NavBar from "../../components/NavBar/NavBar";
import Card from "../../../shared/Cards/Card";
import apibloganime from "../../../assets/apibloganime.png";
import "./General.css";

const Repositories = props => {
    return (
        <article>
            <NavBar />
            <div className="Cards">
                <Card
                    media={apibloganime}
                    title={'Api Blog Anime'}
                    description={'Api built with Node.js, Express, Docker, Swagger and JavaScript, featuring a robust API for seamless database connectivity'}
                    tech={'Node.js, Express, Docker, Swagger, JavaScript, MariaDB'}
                    toRep={'https://github.com/xtsebas/Blog_anime'}
                    buttonRep={'Visit Repository'}
                />
            </div>
        </article>
    );
};

export default Repositories;