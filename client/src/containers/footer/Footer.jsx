import React from 'react';
import assets from '../../assets';
import './footer.css';

const Footer = () => (
  <div className="bestowal__footer section__padding">
    <div className="bestowal__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="bestowal__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="bestowal__footer-links">
      <div className="bestowal__footer-links_logo">
        <img src={assets.bestowal1} alt="gpt3_logo" />
        <p>No 6 Adebola Adeniyi street, Ota Ogun, Ng <br /> All Rights Reserved</p>
      </div>
      <div className="bestowal__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="bestowal__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="bestowal__footer-links_div">
        <h4>Get in touch</h4>
        <p>No 6 Adebola Adeniyi street, Ota Ogun, Ng</p>
        <p>+234 810 383 1029</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="bestowal__footer-copyright">
      <p>@2023 Bestowal. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
