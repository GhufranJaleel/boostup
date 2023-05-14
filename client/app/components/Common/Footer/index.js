/**
 *
 * Footer
 *
 */

import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const infoLinks = [
    { id: 0, name: 'Contact Us', to: '/contact' },
    { id: 1, name: 'Sell With Us', to: '/sell' },
    { id: 2, name: 'Shipping', to: '/shipping' }
  ];

  const footerBusinessLinks = (
    <ul className='support-links'>
      <li className='footer-link'>
        <Link to='/dashboard'>Account Details</Link>
      </li>
      <li className='footer-link'>
        <Link to='/dashboard/orders'>Orders</Link>
      </li>
    </ul>
  );

  const footerLinks = infoLinks.map(item => (
    <li key={item.id} className='footer-link'>
      <Link key={item.id} to={item.to}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <footer className='footer py-2'>
      <div className='homepage2'>
        <div>
        {/* style={{backgroundImage: `url("images/footer-bg.png")`}} */}
        <div>
      <Row className='flex-row footer-image position-relative'>
      <Col xs='12' lg='12' sm='12' md='12' className='px-3 px-md-2 m-auto text-center footer-col-12'>
          <Link to="/BuyCoin">
          <img 
                    src={'./images/coin-kingbooster 1.svg'} 
                    alt="Coin" 
                    className='coin-booster'
                />
              </Link>
          </Col>
          <Col xs='3' lg='3' sm='3' md='3' className='order-lg-1 mb-1 px-3 px-md-2 homeicons'>
          <Link to="">
          <img 
                    src={'./images/House.svg'} 
                    alt="Coin" 
                />
                <span className='d-block'>Home</span>
              </Link>
          </Col>
          <Col xs='3' lg='3' sm='3' md='3' className='order-lg-1 mb-1 px-3 px-md-2 homeicons'>
           <Link to="">
           <img 
                    src={'./images/Icon 2.svg'} 
                    alt="Coin" 
                />
              <span className='d-block'>Assets</span>
              </Link>
          </Col>
          <Col xs='3' lg='3' sm='3' md='3' className='order-lg-1 mb-1 px-3 px-md-2 homeicons'>
           <Link to="">
           <img 
                    src={'./images/Icon 3.svg'} 
                    alt="Coin" 
                />
                  <span className='d-block'>Services</span>
              </Link>
          </Col>
          <Col xs='3' lg='3' sm='3' md='3' className='order-lg-1 mb-1 px-3 px-md-2 homeicons'>
           <Link to="">
           <img 
                    src={'./images/User.svg'} 
                    alt="Coin" 
                />
                <span className='d-block'>Account</span>
              </Link>
          </Col>
            
      </Row>
      </div>
      </div>
      </div>
   
    </footer>
  );
};

export default Footer;
