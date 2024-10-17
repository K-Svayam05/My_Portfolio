import React from 'react';
import { Instagram, Twitter, LinkedIn, GitHub } from "@mui/icons-material";
import './styles/Main.scss'
import me1 from './assets/me1.png';

const Main = () => {
    return (
        <main className='main'>
            <div className='main_container'>
                <div className='main_content'>
                    <div className='text'>
                        <p className="greeting">Hello Everyone!</p>
                        <h1>I am Svayam</h1>
                        <p className="job-title">Front-End Developer and AI-ML Developer</p>

                        <div className='icons'>
                            <Twitter className='icon' />
                            <Instagram className='icon' />
                            <LinkedIn className='icon' />
                            <GitHub className='icon' />
                        </div>

                        <div className='buttons'>
                            <button className="contact-btn">Contact Me!</button>
                            <button className="hire-btn">Hire Me!</button>
                        </div>
                    </div>
                </div>

                <div className='main_img'>
                    <img src={me1} alt='Svayam Kapadia' />
                </div>
            </div>
        </main>
    )
}

export default Main;