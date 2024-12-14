// src/pages/InfoBoxesPage.js
import React from 'react';
import './InfoBoxesPage.css';
import warrantyLogo from '../../assets/logo/1year.png'; // Import the warranty logo
import Hours from '../../assets/logo/48.png'; // Import the hours logo
import order from '../../assets/logo/order.png'; // Import the order logo
import free from '../../assets/logo/free.png'; // Import the free delivery logo
import support from '../../assets/logo/support.png'; // Import the support logo
import consul from '../../assets/logo/consultancy.webp'; 
import packing from '../../assets/logo/package.png'; 


const InfoBoxesPage = () => {
  return (
    <div className="info-boxes-container">
      <div className="info-box">
        <img src={warrantyLogo} alt="1 Year Warranty Logo" className="warranty-logo" />
        <h2>On Site Upto 1 Year</h2>
        <h3>Warranty</h3>
      </div>
      <div className="info-box">
        <img src={Hours} alt="In-House 48 Hours Logo" className="warranty-logo" />
        <h2>In-House 48 Hours</h2>
        <h3>Testing</h3>
      </div>
      <div className="info-box">
        <img src={order} alt="Order Logo" className="warranty-logo" />
        <h2>Know The Performance</h2>
        <h3>Place the order</h3>
      </div>
      <div className="info-box">
        <img src={free} alt="Free Delivery Logo" className="warranty-logo" />
        <h2>Pan India Free</h2>
        <h3>Delivery</h3>
      </div>

      {/* New Content Section */}
      <div className="new-content">
        <h1 className="centered-header">--- How Things Work ---</h1>
        <div className="content-layout">
          <img src={support} alt="Support" className="support" />
          <div className="right-content">
            <h2>BUILDING CUSTOMER PERSONA</h2>
            <p>
              Developing a customer persona is a crucial step for our sales team to effectively deliver tailored PC solutions that meet the unique demands
              of our clientele. A customer persona serves as a detailed profile of our ideal customer, crafted from real data and insights collected
              through direct interactions, surveys, and feedback.
            </p>
            <p> By thoroughly understanding our customers, including their specific needs, preferences,
              and pain points, we can enhance our approach and create targeted strategies that resonate with them. This deeper comprehension not only 
              allows us to offer more relevant solutions but also fosters stronger relationships and ultimately drives customer loyalty and satisfaction.</p>
          </div>
        </div>

        <div className="left-content">
          <div className="left-text">
            <h2>In-Depth Technical Consulting</h2>
            <p>
            Our dedicated team of engineers is committed to ensuring that you are fully equipped and well-prepared long before your new PC arrives at your doorstep.
             We take pride in educating our valued customers, going beyond mere technical support. Prior to the delivery and setup of your PC, our experts offer
              thorough and personalized guidance to empower you with the essential skills and knowledge necessary for optimal usage.
            </p>
            <p>This proactive approach not only helps you feel confident in operating your new system but also enhances your overall experience, ensuring you can 
              fully leverage the capabilities of your PC from the moment it is set up. Our mission is to make your transition seamless and enjoyable, fostering a 
              deeper understanding of your technology and its potential benefits.</p>
          </div>
          <img src={consul} alt="Deep Technical Consulting" className="consultancy-logo" />
        </div>
        <div className="content-layout">
        <img src={free} alt="Free Delivery Logo" className="support" />
          <div className="right-content">
            <h2>Nationwide Free Delivery</h2>
            <p>
            We are proud to offer complimentary delivery and shipping services across India, ensuring a seamless and hassle-free experience for all our customers.
             Our commitment to exceptional service extends beyond just delivering your products; we strive to make the entire process as convenient and enjoyable as possible.
            </p>
            <p>To ensure the utmost safety and security of your purchase during transit, we utilize high-quality packing materials that are specifically designed to protect 
              your items. This careful attention to detail not only safeguards your products but also reflects our dedication to delivering excellence at every step. 
              We believe that your satisfaction begins with the delivery experience, and we are here to make it truly exceptional.</p>
          </div>
          </div>
          <div className="left-content">
          <div className="left-text">
            <h2>Ultra-Durable Packaging</h2>
            <p>
            We take pride in our innovative three-layer protection packing method, which has been meticulously designed to safeguard your items during transit.
             This advanced packaging system ensures that your products receive the utmost care from the moment they leave our facility until they arrive at your doorstep.
             The first layer of our packing solution is specifically engineered to absorb shocks and vibrations, effectively cushioning your items against any impacts they may 
             encounter during transportation.The second layer enhances structural integrity, providing added reinforcement to the package and shielding it from external
              pressures that could compromise its contents.
            </p>
            <p>Finally, the third layer serves as a robust barrier against environmental factors such as moisture, dust, and temperature fluctuations. 
              This comprehensive approach significantly minimizes the risk of damage, ensuring that your items arrive in perfect condition, ready for you to enjoy.
               With our ultra-durable packing, you can have complete confidence in the safety and security of your purchases, no matter where they travel.</p>
          </div>
          <img src={packing} alt="Deep Technical Consulting" className="pack" />
        </div>
        </div>
      </div>
    
  );
};

export default InfoBoxesPage;
