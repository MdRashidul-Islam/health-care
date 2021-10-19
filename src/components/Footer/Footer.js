import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
            <div className="row text-white">
              <div className="col-md-4 footer-box">
                <h1>Health-Care</h1>
                <p></p>
              </div>
              <div className="col-md-4 footer-box">
                <h2><b>Contact Us</b></h2>
                <p>Tangail, Dhaka</p>
                <p>Phone: 01736919983</p>
                <p>Email: rashidulrony79775@gmail.com</p>
              </div>
              <div className="col-md-4 footer-box">
              <div id="contact-right">
                    <h3>Subscribe news letter</h3>
                    <input className="input" type="text" placeholder="Enter your Email" /> <br />
                    <button className="subs-btn">Subscribe</button>
                    <div>
                        
                    </div>

                </div>
        
              </div>
            </div>
          
            <p className="copyright">website created by || Rashidul Rony</p>
          </div>
  );
};

export default Footer;