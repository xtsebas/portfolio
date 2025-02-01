import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {     faHtml5, faCss3Alt, faJs, faPython, faJava, faPhp, faNodeJs, 
    faReact, faLaravel, faBootstrap, faAndroid, faLinux, faWindows, 
    faGithub  } from '@fortawesome/free-brands-svg-icons';
import {  faDatabase } from '@fortawesome/free-solid-svg-icons';

import './Skills.css';

const Skills = props => {
    const iconMap = {
        "HTML": faHtml5,
        "CSS": faCss3Alt,
        "JavaScript": faJs,
        "jQuery": faJs,
        "Python": faPython,
        "Java": faJava,
        "PHP": faPhp,
        "SQL": faDatabase,
        "PostgreSQL": faDatabase,
        "MySQL": faDatabase,
        "Node.js": faNodeJs,
        "Express.js": faNodeJs,
        "React": faReact,
        "Laravel": faLaravel,
        "Bootstrap": faBootstrap,
        "Next.js": faReact,
        "Vite": faReact,
        "Android Studio": faAndroid,
        "Kotlin": faAndroid,
        "Windows": faWindows,
        "Linux": faLinux,
        "WSL": faLinux,
        "Git": faGithub,
        "GitHub": faGithub,
    };

    return (
        <div className="skill">
            <h2>{props.title}</h2>
            <ul>
                {props.skills.map((skill, index) => (
                    <li key={index}>
                        <FontAwesomeIcon icon={iconMap[skill]} />
                        <span>{skill}</span>
                        {props.percentage && props.percentage[index] && (
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${props.percentage[index]}%`, backgroundColor:`${props.color[index]}` }}></div>
                                <span className="tooltip">{`${props.percentage[index]}%`}</span>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;