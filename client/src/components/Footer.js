import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; 2024 Blogging. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-end">
                        <a href="https://www.instagram.com"><FaInstagram className="me-3 text-white" /></a>
                        <a href="https://www.facebook.com"><FaFacebook className="me-3 text-white" /></a>
                        <a href="https://www.linkedin.com"><FaLinkedin className="text-white" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
