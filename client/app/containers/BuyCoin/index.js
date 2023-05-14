/**
 *
 * Shop
 *
 */

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
class BuyCoin extends React.PureComponent {
  render() {
    return (
      <div className='shop buyCoin'>
         <Row>
        <Col xs='12' lg='12' sm='12' md='12' className='mb-2 px-0'>
        <div>
                 <img 
                    src={'./images/Coins/Image (1).png'} 
                    alt="Coin" 
                />
                <h1 className='py-2 px-4'>La quattordicesima domenica del tempo ordinario </h1>
                </div>
                </Col>
                <Col xs='6' lg='6' sm='6' md='6' className='px-2'>
              <div className='coin-btns'>
                <p className='text-center'>Price：$8.00/Ticket</p>
              </div>
            </Col>
            <Col xs='6' lg='6' sm='6' md='6' className='px-2'>
              <div className='coin-btns'>
                <p className=' text-center'>Voucher: 1 Sheet/Ticket</p>
              </div>
            </Col>
            <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-0'>
        <div>
                <p className='px-4'>The income per movie ticket purchase depends on the level: minimum 5.5% to maximum 10%</p>
                <h1 className='px-4'>La quattordicesima domenica del tempo ordinario </h1>
                <div className='Coin-lists'>
                <ul className='pl-5 pr-2 mb-6'>
                  <li>The income per movie ti</li>
                  <li>The income </li>
                  <li>The income per movie ti</li>
                </ul>
                <div className='px-0 buycoin-btn'>
                
                <h1 className='py-2 px-4'>But it Now</h1>
              
                </div>
          </div>
          </div>
          </Col>
          </Row>
          <Row className='mb-5'>
                <Col xs='6' lg='6' sm='6' md='6' className='px-2'>
              <div className='coin-btns'>
                <p className='text-center'>Price：$8.00/Ticket</p>
              </div>
            </Col>
            <Col xs='6' lg='6' sm='6' md='6' className='px-2'>
              <div className='coin-btns'>
                <p className=' text-center'>Voucher: 1 Sheet/Ticket</p>
              </div>
            </Col>
            <Col xs='12' lg='12' sm='12' md='12' className='px-3 voucher-detail py-3 m-auto'>
              <div className='v-detail width-50'>
                <h1>Voucher</h1>
              </div>
              <div className='v-detail width-50'>
              <h1 className='text-right'>1 Sheets</h1>
              </div>
              <div className='v-detail width-50'>
                <h1>Service Charge</h1>
              </div>
              <div className='v-detail width-50'>
              <h1 className='text-right'>1 %</h1>
              </div>
            </Col>
            <Col xs='12' lg='12' sm='12' md='12' className='px-3 voucher-detail py-3 m-auto'>
              <div className='v-detail width-50'>
                <h1>Purchase Quantity</h1>
              </div>
              <div className='v-detail width-50'>
              <h1 className='text-center'>Quantity Count</h1>
              </div>
            </Col>
            <Col xs='12' lg='12' sm='12' md='12' className='px-3 voucher-detail py-3'>
              <div className='v-detail width-30'>
                <p>Purchase Quantity</p>
              </div>
              <div className='v-detail width-35'>
              <p className='text-center'>Quantity Count</p>
              </div>
              <div className='v-detail width-35'>
              <p className='text-center'>Quantity Count</p>
              </div>
              <div className='v-detail mr-2 width-35 mt-1'>
                <h1 className='padding-for-popup-buy'>256.00</h1>
              </div>
              <div className='v-detail ml-1 mt-1' style={{width:"61%"}}>
              <h1 className='text-center'><span>x</span> 4.00% = 10.24</h1>
              </div>
            </Col>
            <Col xs='12' lg='12' sm='12' md='12' className='px-3 voucher-detail pb-2'>
              <div className='v-detail width-50'>
                <h1>Payment Type</h1>
              </div>
              <div className='v-detail width-50'>
              <h1 className='text-left'>Balance</h1>
              <h1 className='text-left'>Balance</h1>
              </div>
              <div className='px-0 buycoin-btn mt-1'>
                
                <h1 className='py-2 px-4'>Purchase</h1>
              
                </div>
            </Col>
          </Row>
      
      </div>
    );
  }
}

export default BuyCoin;
