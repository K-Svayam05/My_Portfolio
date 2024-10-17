import React from "react";
import './styles/Section.scss';
import me from './assets/me1.png';

const Section = () => {
    const skills = [
        "Experience in Frontend and Backend Development",
        "Machine Learning Developer",
        "Python Development",
        "Artificial Intelligence",
        "Software Engineering"
    ];

    return (
        <section className="section">
            <div className="section_container">
                <div className="section_img">
                    <img src={me} alt="Svayam Kapadia" />
                </div>
                <div className="section_content">
                    <h2>Svayam Kapadia</h2>
                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index} className="highlight">{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Section;