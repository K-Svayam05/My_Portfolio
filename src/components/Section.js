import React from "react";
import './styles/Section.scss';
import me from './assets/me1.png';

const Section = ( ) =>{
    return(
        <div className="sections">
            <div className="sections_container">
                <div className="section_img">
                    <img src={me} alt=" "/>
                </div>
                <div className="section_content">
                    <h1>Svayam Kapadia</h1>
                    <p className="highlight">Experience in Frontend and Backend Development</p>
                    <p className="highlight">Machine Learning Developer</p>
                    <p className="highlight">Python Development</p>
                    <p className="highlight">Artificial Intelligence</p>
                    <p className="highlight">Software Engineering</p>
                </div>
            </div>

        </div>
    )

}
export default Section