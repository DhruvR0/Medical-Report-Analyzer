import React from 'react';
import './About.scss';
import aboutus from '../../assets/aboutus.jpeg'; // Path to your background image
import { FaShieldAlt, FaUsers, FaLightbulb } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="header">
        <div className="overlay"></div> {/* Overlay for better text readability */}
        <h1>About Us</h1>
        <p>Empowering you to understand your medical reports with generative AI.</p>
      </header>

      <section className="section mission">
        <div className="content">
          <h2>Our Mission</h2>
          <p>
            At <span className="highlight">MediScan</span>, we simplify the process of identifying potential health
            concerns from medical reports. By analyzing PDF files with generative AI, we break down complex medical
            data into clear, actionable insights.
          </p>
        </div>
      </section>

      <section className="section how-it-works">
        <div className="content">
          <h2>How It Works</h2>
          <p>
            Simply upload your PDF medical report, and our AI-powered analyzer will scan the document, identify key
            medical terms, and highlight any potential health concerns in a user-friendly format.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-card">
          <FaLightbulb className="icon" />
          <h2>Why Generative AI?</h2>
          <p>
            Our generative AI technology goes beyond basic keyword extraction, offering nuanced insights by interpreting
            complex medical terminologies found in your reports.
          </p>
        </div>

        <div className="about-card">
          <FaUsers className="icon" />
          <h2>Benefits</h2>
          <p>
            We aim to provide fast and reliable results using generative AI, allowing users to focus on their health
            and wellbeing.
          </p>
        </div>

        <div className="about-card">
          <FaShieldAlt className="icon" />
          <h2>Your Privacy</h2>
          <p>
            We prioritize your privacy. All uploaded documents are processed securely, and no personal health
            information is stored on our servers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
