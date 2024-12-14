import React from 'react';
import { FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        {/* Social Media Links */}
        <div className="footer-links">
          <div className="footer-contact">
            <h4>Social Media</h4>
          </div>
          <a href="https://www.instagram.com/pcdoc_nanda/" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
          <a href="https://www.youtube.com/@A2DChannel" target="_blank" rel="noopener noreferrer">
            <FaYoutube /> YouTube
          </a>
        </div>
        
        {/* Contact Information */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><FaPhone /> +91 94457 47768</p>
          <p><FaPhone /> +91 90253 80083</p>
          <p><FaEnvelope className="email-icon" /> <a href="mailto:support@a2dpcfactory.com">support@a2dpcfactory.com</a></p>
        </div>
        
        {/* Opening Hours */}
        <div className="footer-opening">
          <h4>Opening Hours</h4>
          <p><FaClock /> Monday - Saturday: 09:00 AM - 7:30 PM</p>
          <p><FaClock /> Sunday: Timing 09:00 AM - 06:00 PM</p>
        </div>
      </div>
      
      {/* Centered Copyright */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Jeevan Larosh. All Rights Reserved. Designed By this site.</p>
      </div>
    </footer>
  );
};

export default Footer;
