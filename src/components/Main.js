import React from 'react';
import { Instagram, X, LinkedIn, GitHub } from "@mui/icons-material";
// import XIcon from '@mui/icons-material/X';
import './styles/Main.scss'
import me1 from './assets/me1.png';

const Main = () => {
    return (
        <div className='main'>
            <div className='main_container'>
                <div className='main_content'>
                    <div className='text'>
                        <p>
                            Hello Everyone !
                        </p>
                        <h1>
                            I am Svayam
                        </h1>
                        <p>Front-End Developer and AI-ML Developer</p>

                        <div className='icons'>
                            <X className='icon' />
                            <Instagram className='icon' />
                            <LinkedIn className='icon' />
                            <GitHub className='icon' />
                        </div>

                        <div className='buttons'>
                            <button>Contact Me!</button>
                            <button>Hire Me!</button>
                        </div>

                    </div>
                </div>

                <div className='main_img'>
                    <img src={me1} alt=' '/>
                </div>

            </div>

        </div>
    )
}

export default Main