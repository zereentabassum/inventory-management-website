import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <div className='bg-danger mt-5 img-fluid footer-section'>
      <div>
          <div className="py-5 px-1 text-light text-start footer">

            <div  className='px-3'>
                <h5>Contact us</h5>
                <p>Address: 1234 Street, SK</p>
                <p>Email: Marvella34@gmail.com</p>
            </div>
            <div  className=''>
                <h5>About us</h5>
                <p>Community</p>
                <p>Support</p>
                <p>Articles</p>
                <p>Guides</p>
            </div>
            <div  className=''>
                <h5>Learn More</h5>
                <p>Terms and Conditions</p>
                <p>Help</p>
                <p>Latest News</p>
                <p>FAQ</p>
            </div>
          </div>
          </div>
          <div className='py-2 copyright text-light'>
              
          <p>Copyright © 2022. All rights reserved</p>
          </div>
          </div>  
    );
};

export default Footer;