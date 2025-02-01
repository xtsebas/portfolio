import React from "react";

import './Principal.css';
import Presentation from "../components/Presentation/Presentation";
import rocket from "../../assets/rocket.jpg";
import volleyball from "../../assets/volleyball.jpg";
import puzzle from "../../assets/puzzle.jpg";
import manga from "../../assets/manga.jpg";
import rubik from "../../assets/rubik.jpg";

const Aboutme = props => {
    return (
        <article className="article">
            <div className="header">
                <h1>About me </h1>
                <div className="line"></div>
            </div>
            <p>I am Sebastian Huertas, born on April 7, 2004, a Computer Science student passionate about programming and its ability to enhance websites, software, and applications. I have skills in HTML, CSS, JavaScript, PHP, Node.js, Java, Python, and basic C#, and experience with frameworks like Laravel, React, and Vite, as well as Tailwind CSS. My database knowledge includes MySQL and PostgreSQL, with ongoing learning in MongoDB. Currently in my third year at Universidad del Valle de Guatemala with a GPA above 90%, I am particularly interested in cybersecurity. Professionally, I work at a development company, applying problem-solving skills and learning continuously. Previously, I gained teamwork and pressure management skills in event management. I aim to continue growing in the tech field, constantly learning and improving to make meaningful contributions.</p>
            <div className="ido">
                <h2>What I do</h2>
                <Presentation
                    title="Web Development"
                    description="I develop websites using HTML, CSS, JavaScript, PHP, and Node.js, and frameworks like Laravel, React, and Vite, as well as Tailwind CSS."
                />
                <Presentation
                    title="Programming"
                    description="I program in Java, Python, and basic C#, and have experience with MySQL and PostgreSQL databases, with ongoing learning in MongoDB."
                />
                <Presentation
                    title="Backend Programs"
                    image={rubik}
                    description="I develop backend programs using Node.js, PHP, and Java, and have experience with frameworks like Laravel and Express. Im actually doing a code to resolve a rubik's cube."
                />
                <Presentation
                    title="Algorithms and Data Structures"
                    description="I have knowledge of algorithms and data structures, and have developed programs that use them, such as a calculator that converts infix to postfix."
                />
            </div>
            <div className="hobbies">
                <h2>Hobbies</h2>
                <Presentation
                    title="Volleyball"
                    image={volleyball}
                    description="I love playing volleyball, a sport that I have practiced since I was 12 years old. I have played in school teams and in tournaments."
                />
                <Presentation
                    title="Puzzles"
                    image={puzzle}
                    description="I like to do puzzles, especially 2D puzzles, which I find challenging and entertaining, also like to do Rubik's cubes."
                />
                <Presentation
                    title="Rocket League"
                    image={rocket}
                    description="I enjoy playing Rocket League, a video game that combines soccer and cars, which I find fun and challenging. I have played it since 2016."
                />
                <Presentation
                    title="Anime and Manga"
                    image={manga}
                    description="I like to watch anime and read manga, which I find entertaining and interesting. I have watched more than 50 anime series and read more than 10 manga series. I also have a collection of mangas."
                />
            </div>
        </article>
    );
};  

export default Aboutme;