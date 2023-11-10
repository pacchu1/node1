// Footer.js
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './styles/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3 className='boot'>My Company</h3>
                <p>1234 Street, City, Country 12345</p>
                <p>Email: contact@mycompany.com</p>
                <p>Phone: +123 456 7890</p>
            </div>
            <div className="footer-social"><p className='follow'>Follow us</p>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
            <div>
            <p>More information</p>
            <p>Terms & conditions</p>
            <p>Privacy policy</p>
            </div>
            <div className="footer-legal">
                <p className='foot'>&copy; 2023 My Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
