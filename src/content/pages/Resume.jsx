import React from "react";

import './Principal.css';
import Experience from "../components/Experience/Experience";
import Skills from "../components/skills/Skills";

const Resume = props => {
    return (
        <article className="article">
            <h1>Resume</h1>
            <div className="experience">
                <Experience
                    title = "Education"
                    text = " I am a Computer Science Engineering student at Universidad del Valle de Guatemala with a GPA over 85%. I have skills in Python, Java, HTML, CSS, JavaScript, Android Studio, and SQL databases like PostgreSQL, MySQL, and Oracle. Currently, I am advancing my knowledge in Web Technology, working with React and Node.js, and deepening my SQL expertise in a Database course. Additionally, I am studying Page Design and Project Management."
                />
                <Experience
                    title = "Job Experience"
                    text = " I worked as a web developer using Laravel and PHP for frontend, backend, and API programming, including database calls. I contributed to the Pediatric Foundation of Guatemala's anamnesis project, resolving frontend issues and gaining basic Linux server management knowledge. As a dedicated university student, I possess skills in SQL, Python, Java, JavaScript, Kotlin, HTML, Laravel, React, Bootstrap, and jQuery. I am eager to continue learning and contribute effectively to my team."
                />
            </div>
            <div className="skills">
                <Skills
                    title="Frontend"
                    skills={["HTML", "CSS", "JavaScript", "jQuery"]}
                />
                <Skills
                    title="Backend"
                    skills={["Python", "Java", "PHP"]}
                />
                <Skills
                    title="DataBases"
                    skills={["SQL", "PostgreSQL", "MySQL"]}
                />
                <Skills
                    title="Server Side"
                    skills={["Node.js", "Express.js"]}
                />
                <Skills
                    title="Frameworks"
                    skills={["React", "Laravel", "Bootstrap", "Next.js", "Vite"]}
                />
                <Skills
                    title="Mobile"
                    skills={["Android Studio", "Kotlin"]}
                />
                <Skills
                    title = "OS"
                    skills = {[ "Windows", "Linux", "WSL"]}
                />
                <Skills
                    title = "Version Control"
                    skills = {[ "Git", "GitHub"]}
                />
                <Skills
                    title = "Personal Skills"
                    skills = {[ "Teamwork", "Problem-solving", "Adaptability", "Time Management", "Communication", "Leadership", "Creativity", "Critical Thinking", "B1 English", "Native Spanish"]}
                />
            </div>
        </article>
    );
};

export default Resume;