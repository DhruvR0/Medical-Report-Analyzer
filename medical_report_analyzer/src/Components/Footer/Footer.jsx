import React from 'react';
import './Footer.scss'; // Import the SCSS file for the footer styles
import { Link } from 'react-router-dom'; // Use Link for navigation
import { TiSocialLinkedin } from "react-icons/ti"; // Import LinkedIn icon
import { FaInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/report-analyzer">Report Analyzer</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@medicalreportanalyzer.com</p>
          <p>Phone: +1 (234) 567-890</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare  size={24} color="#fff" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaSquareTwitter  size={24} color="#fff" /> 
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <TiSocialLinkedin  size={24} color="#fff" /> {/* Using react-icons here */}
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} color="#fff" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Medical Report Analyzer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
