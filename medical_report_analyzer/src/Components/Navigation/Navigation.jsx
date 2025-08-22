import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../Navigation/Navigation.css';
import Symbol from '../../assets/Symbol.png'

const Navigation = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) { // Change the threshold as needed
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={navbarScrolled ? 'Navigation scrolled' : 'Navigation'}>
      <div className="name">
        <span className='symbol'>
          <img  src={Symbol} alt="" />
          MediScan</span>
      </div>
      <div className="links">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/ReportAnalyzer">Report Analyzer</Link>
        </div>
        <div>
          <Link to="/Contact">Contact Us</Link>
        </div>
        <div>
          <Link to="/about">About Us</Link>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
