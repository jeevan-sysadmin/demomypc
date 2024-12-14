import React, { useState } from 'react';
import './HeroSection.css';
import gif from '../../assets/video/pc_3d.931dbb3564787a5552ac.gif'; 
import logo1 from '../../assets/logo/a2d.jpeg'; // Import the logo
import Form from '../Form/Form';
import Modal from '../Modal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="hero-section">
      <div className="logo1-container">
        <img src={logo1} alt="Logo" className="logo1" />
      </div>
      <div className="text-content">
        <h1 className="main-text">
          WE BUILD <span className="highlight-people">PEOPLE</span><br /> BEFORE WE <br /> BUILD <span className="highlight-pc">PC</span>
        </h1> 
        <p className="tagline">
          Crafting Your Ultimate Gaming Experience - Unleash Your Power! Smart people work with Smart Systems. Customize your Dream PC
        </p>
        <button className="build-button" onClick={handleButtonClick}>BUILD NOW</button>
      </div>
      <div className="video-container">
        <img src={gif} alt="3D PC Animation" className="hero-gif" />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Form />
      </Modal>
      <div className="footer-quote">
        If you want to <span className="highlight-quote">CRACK</span> the system, First <span className="highlight-quote">UNDERSTAND</span> the system
        <br />
        <span className="author">-PC Doc</span>
      </div>
    </section>
  );
};

export default HeroSection;
