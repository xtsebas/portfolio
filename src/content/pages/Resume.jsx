import React from "react";
import { useTranslation } from 'react-i18next';

import './Principal.css';
import Experience from "../components/Experience/Experience";
import Skills from "../components/skills/Skills";

const Resume = props => {
    const { t } = useTranslation();
    const categories = t('resume.skills.categories', { returnObjects: true });
    const personalSkills = t('resume.skills.personal', { returnObjects: true });

    return (
        <article className="article">
            <div className="header">
                <h1>{t('resume.title')}</h1>
                <div className="line"></div>
            </div>
            <div className="experience">
                <Experience
                    title={t('resume.education.title')}
                    text={t('resume.education.description')}
                />
                <Experience
                    title={t('resume.experience.title')}
                    text={t('resume.experience.description')}
                />
            </div>
            <div className="skills">
                <Skills
                    title={categories.frontend}
                    skills={["HTML", "CSS", "JavaScript", "jQuery"]}
                    percentage={[90, 70, 80, 50]}
                    color={["#ff4c0c", "#349bd4", "#f3db1c", "#0464ac"]}
                />
                <Skills
                    title={categories.backend}
                    skills={["Python", "Java", "PHP"]}
                    percentage={[85, 95, 70]}
                    color={["#467cac", "#fb9b1c", "#7679b0"]}
                />
                <Skills
                    title={categories.databases}
                    skills={["SQL", "PostgreSQL", "MySQL"]}
                    percentage={[90, 90, 90]}
                    color={["#336791", "#336791", "#f29111"]}
                />
                <Skills
                    title={categories.serverSide}
                    skills={["Node.js", "Express.js"]}
                    percentage={[90, 80]}
                    color={["#8bc304", "#000000"]}
                />
                <Skills
                    title={categories.frameworks}
                    skills={["React", "Laravel", "Bootstrap", "Next.js", "Vite"]}
                    percentage={[90, 80, 70, 80, 90]}
                    color={["#61DAFB", "#FF2D20", "#7952B3", "#000000", "#646CFF"]}
                />
                <Skills
                    title={categories.mobile}
                    skills={["Android Studio", "Kotlin"]}
                    percentage={[75, 75]}
                    color={["#3DDC84", "#0095D5"]}
                />
                <Skills
                    title={categories.os}
                    skills={["Windows", "Linux", "WSL"]}
                    percentage={[90, 80, 70]}
                    color={["#0078D6", "#FCC624", "#000000"]}
                />
                <Skills
                    title={categories.versionControl}
                    skills={["Git", "GitHub"]}
                    percentage={[90, 90]}
                    color={["#F05032", "#181717"]}
                />
                <Skills
                    title={categories.personal}
                    skills={personalSkills}
                />
            </div>
        </article>
    );
};

export default Resume;
