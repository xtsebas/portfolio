import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Card from "../../../shared/Cards/Card";
import calculator from "../../../assets/calculator.gif";
import animeBlog from "../../../assets/animeblog.gif";
import "./General.css";

const Web = props => {
    

    return (
        <article className="article">
            <NavBar />
            <div className="Cards">
                <Card 
                    media={animeBlog}
                    title={'Blog Anime'} 
                    description={'Full-stack blog built with React, Node.js, Vite, and JavaScript, featuring a robust API for seamless database connectivity'}
                    tech={'React, Node.js, Vite, JavaScript, CSS, HTML, MariaDB'} 
                    toWeb={'https://663ab7948680e97bea0bbf34--ephemeral-dieffenbachia-a772c8.netlify.app/#/login'}
                    buttonWeb={'Visit Site'}
                    toRep={'https://github.com/xtsebas/Blog'}
                    buttonRep={'Source Code'}
                />
                <Card 
                    media={calculator} 
                    title={'Calculator'} 
                    description={'Next.js calculator app featuring responsive design and comprehensive unit testing for robust functionality'}
                    tech={'Next.js, JavaScript, CSS, HTML, Jest, React Testing Library'} 
                    toWeb={'https://calculatortesting74.netlify.app/'}
                    buttonWeb={'Visit Site'}
                    toRep={'https://github.com/xtsebas/calculator-testing'}
                    buttonRep={'Source Code'}
                />
                
            </div>
        </article>
    );
};

export default Web;