import React from 'react';
import './About.css'
import aboutImg from '../../images/about.jpg'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-banner">
        <img className="about-img" src={aboutImg} alt="" />
      </div>
      <div className="about-info">
        <h2 className="about-title">About US</h2>
        <p>Our highly skilled team of nursing and medical staff take pride in developing a distinctive private hospital experience and a quality of care that is recognised by the community. Throughout our patients’ stay, from pre-admission to discharge, each patient is treated with the utmost respect and dignity. Our five modern operating theatres are equipped with the latest technical equipment, Throughout our patients’ stay, from pre-admission to discharge, each patient is treated with the utmost respect and dignity. Our five modern operating theatres are equipped with the latest technical equipmentsupporting minor and complex surgery. For acutely ill patients or following major surgery, the three bed High Dependency Unit provides constant care and supervision to patients requiring specialist attention.</p>
        <button className="ser-btn">Connect With US</button>
      </div>
      
    </div>
  );
};

export default About;