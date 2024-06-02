import react from "react";

import NavBar from "../../components/NavBar/NavBar";
import Card from "../../../shared/Cards/Card";
import apibloganime from "../../../assets/apibloganime.png";
import infixtopostfix from "../../../assets/infixtopostfix.png";
import "./General.css";

const Repositories = props => {
    return (
        <article className="article">
            <NavBar />
            <div className="Cards">
                <Card
                    media={apibloganime}
                    title={'Api Blog Anime'}
                    description={'Api built with Node.js, Express, Docker, Swagger and JavaScript, featuring a robust API for seamless database connectivity'}
                    tech={'Node.js, Express, Docker, Swagger, JavaScript, MariaDB'}
                    toRep={'https://github.com/xtsebas/Blog_anime'}
                    buttonRep={'Source Code'}
                />
                <Card
                    media={infixtopostfix}
                    title={'Infix to Postfix'}
                    description={'Infix to Postfix built with Java OOP, it only works locally, it is a console application'}
                    tech={'Java, OOP, Console Application'}
                    toRep={'https://github.com/Gxrco/CalculatorPostFix.git'}
                    buttonRep={'Source Code'}
                />
            </div>
        </article>
    );
};

export default Repositories;