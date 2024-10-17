import React from "react";
import './styles/Contact.scss';
import { ArrowBack } from "@mui/icons-material";
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-container">
                <Link to='/' className="back-link">
                    <ArrowBack className="arrow"/>
                    <span>Back to Home</span>
                </Link>
                <form className="contact-form">
                    <h1>Contact Me!</h1>
                    <div className="input-group">
                        <input type="text" id="name" required />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-group">
                        <input type="email" id="email" required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-group">
                        <textarea id="message" rows="4" required></textarea>
                        <label htmlFor="message">Message</label>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;