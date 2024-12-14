import React from 'react';
import './GetInTouchPage.css';
import costomer from '../../assets/logo/costomer.png';

function GetInTouchPage() {
    const handleSupportClick = () => {
        window.location.href = 'https://a2dpcfactory.freshdesk.com/support/home';
    };

    return (
        <div className="get-in-touch-container">
            {/* Title at the top center */}
            <h1 className="title">Get in Touch</h1>
            
            {/* Main content container */}
            <div className="content-container">
                {/* Left side - description and support button */}
                
                <p className="description">
                        We're here to assist you! Submit a support ticket, and our dedicated team will promptly address your concerns and provide the help you need.
                    </p>
                <div className="text-content">
                    
                    {/* <button className="support-button" onClick={handleSupportClick}>Get Support</button> */}
                </div>
                
                
                {/* Center - Image */}
                <img src={costomer} alt="Support" className="support" />
                
                {/* Right side - Quote */}
                <div className="quote">
                    <p>
                        <span className="yellow-text">Clarity</span> Gives Purpose, 
                        <span className="yellow-text"> Purpose</span> Fuels Drive, 
                        Altogether, keeps you on <span className="yellow-text">Right-Track</span>.
                    </p>
                    <p className="red-text">- PC Doc</p>
                    <button className="support-button" onClick={handleSupportClick}>Get Support</button>
                </div>
            </div>
        </div>
    );
}

export default GetInTouchPage;
