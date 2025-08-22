import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Navigation from './Components/Navigation/Navigation';
import Contact from './Components/Contact/Contact';
import ReportAnalyzer from './Components/ReportAnalyzer/ReportAnalyzer';
import Visualize from './Components/Visualize/Visualize';

import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path='/Contact' element ={<Contact/>}/>
        <Route path="/about" element={<About />} />
      <Route path='/ReportAnalyzer' element={<ReportAnalyzer/>}/>
      <Route path='/Visualize' element={<Visualize/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
