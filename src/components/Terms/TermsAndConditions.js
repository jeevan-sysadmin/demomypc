// pages/TermsAndConditions.js
import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1 className="heading">Terms & Conditions</h1>

      <section className="section heading">
        <h2>Welcome to A2D PC Factory</h2>
        
      </section>
      <p>Thank you for choosing A2D PC FACTORY. Our commitment is to deliver high-performance custom PC solutions that empower your creativity, productivity, and enjoyment. By accessing or using our website and services, you agree to be bound by the following terms and conditions. Please read them carefully.</p>

      <section className="section">
        <h2>1. General Terms</h2>
        <h3>1.1 Acceptance of Terms</h3>
        <p>By accessing our website and purchasing our products, you agree to comply with and be bound by these terms and conditions.</p>
        <h3>1.2 Modifications</h3>
        <p>We reserve the right to change or modify these terms at any time. Your continued use of our website following any changes indicates your acceptance of the new terms.</p>
      </section>

      <section className="section">
        <h2>2. Products and Services</h2>
        <h3>2.1 Product Description</h3>
        <p>We strive to provide accurate descriptions and images of our products. However, we do not warrant that the product descriptions or other content on our website are error-free, complete, or current.</p>
        <h3>2.2 Customization</h3>
        <p>Our PCs are customizable to meet your specific needs. Please ensure that your customization choices are accurate, as we cannot be held responsible for errors in the configuration specified by you.</p>
      </section>

      {/* Continue adding more sections as needed */}

      <section className="section">
        <h2>12. Contact Information</h2>
        <p>For any questions or concerns regarding these terms and conditions, please contact our customer support team at <a href="mailto:support@a2dpcfactory.com">support@a2dpcfactory.com</a> or call us at +91 94457 47768, +91 90253 80083.</p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
