import React from "react";

import './Principal.css';
import Experience from "../components/Experience/Experience";
import Skills from "../components/skills/Skills";

const Resume = props => {
    return (
        <article className="article">
            <div className="header">
                <h1>Resume </h1>
                <div className="line"></div>
            </div>
            <div className="experience">
                <Experience
                    title = "Education"
                    text = " I am a Computer Science Engineering student at Universidad del Valle de Guatemala with a GPA over 85%. I have skills in Python, Java, HTML, CSS, JavaScript, Android Studio, and SQL databases like PostgreSQL, MySQL, and Oracle. Currently, I am advancing my knowledge in Web Technology, working with React and Node.js, and deepening my SQL expertise in a Database course."
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
                    percentage={[90, 70, 80, 50]}
                    color={["#ff4c0c", "#349bd4", "#f3db1c", "#0464ac"]}
                />
                <Skills
                    title="Backend"
                    skills={["Python", "Java", "PHP"]}
                    percentage={[85, 95, 70]}
                    color={["#467cac", "#fb9b1c", "#7679b0"]}
                />
                <Skills
                    title="DataBases"
                    skills={["SQL", "PostgreSQL", "MySQL"]}
                    percentage={[90, 90, 90]}
                    color={["#336791", "#336791", "#f29111"]}
                />
                <Skills
                    title="Server Side"
                    skills={["Node.js", "Express.js"]}
                    percentage={[90, 80]}
                    color={["#8bc304", "#000000"]}
                />
                <Skills
                    title="Frameworks"
                    skills={["React", "Laravel", "Bootstrap", "Next.js", "Vite"]}
                    percentage={[90, 80, 70, 80, 90]}
                    color={["#61DAFB", "#FF2D20", "#7952B3", "#000000", "#646CFF"]}
                />
                <Skills
                    title="Mobile"
                    skills={["Android Studio", "Kotlin"]}
                    percentage={[75, 75]}
                    color={["#3DDC84", "#0095D5"]}
                />
                <Skills
                    title="OS"
                    skills={["Windows", "Linux", "WSL"]}
                    percentage={[90, 80, 70]}
                    color={["#0078D6", "#FCC624", "#000000"]}
                />
                <Skills
                    title="Version Control"
                    skills={["Git", "GitHub"]}
                    percentage={[90, 90]}
                    color={["#F05032", "#181717"]}
                />
                <Skills
                    title="Personal Skills"
                    skills={[
                        "Teamwork",
                        "Problem-solving",
                        "Adaptability",
                        "Time Management",
                        "Communication",
                        "Leadership",
                        "Creativity",
                        "Critical Thinking",
                        "B1 English",
                        "Native Spanish"
                    ]}
                />
            </div>
        </article>
    );
};

export default Resume;