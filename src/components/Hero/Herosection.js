import React from 'react';
import heroImg from '../../images/hero-image1.jpg'
import './Herosection.css';
import { Link } from 'react-router-dom'


const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={heroImg} alt="Hero" />
      <div className="hero-text">
        <h1>Welcome to CampusVista</h1>
        <p>Empowering college students to thrive academically, mentally, and socially with CampusVista - your holistic one-stop solution for success.</p>
        <Link to="/expense-home">
          <button className="tour-button">Take a Tour</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
