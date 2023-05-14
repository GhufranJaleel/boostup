/**
 *
 * Shop
 *
 */

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Input from '../../components/Common/Input';
class Recharge extends React.PureComponent {
  render() {
    return (
      <div className='shop buyCoin'>
         <Row>
         <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-0 recharge-balance'>
        <h1 className='text-center gold-color'>Recharge Balance</h1>
          </Col>
            <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-0 recharge-balance'>
              <div className='m-auto p-2'>
                <p className='text-center'>Current Balance</p>
              <div className='coin-btns recharge-balance-btn'>
                <p className=' text-center mb-1'>Price：$8.00/Ticket</p>
              </div>
              </div>
            </Col>
            
               <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-2 recharge-input'>
                  <Input
                        type={'number'}
                        label={'Recharge Amount($)'}
                        name={'email'}
                        placeholder={'20$'}
                      />
                      <div className='recharge-lists'>
                        <ul className='pl-5 pr-2 mb-6'>
                          <li className='active-btn'><span>$20</span></li>
                          <li><span>$20</span></li>
                          <li><span>$20</span></li>
                          <li><span>$20</span></li>
                          <li><span>$20</span></li>
                          <li><span>$20</span></li>
                          <li><span>$20</span></li>
                          <li><span>$20</span></li>
                          <li><span>$20</span></li>
                        </ul>
                      </div>
              </Col>
              <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-2 recharge-input'>
                <p className='px-1'>Recharge Type</p>
                      <div className='recharge-lists'>
                        <ul className='pl-1 pr-2 mb-6'>
                          <li className='active-btn'><span className='text-dark'>TRC 20</span></li>
                        </ul>
                      </div>
              </Col>

            <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-0'>
        <div>
        <div className='px-0 buycoin-btn pb-3'>
                <h1 className='py-2 px-4 gold-color bg-theme ok-to-recharge'>Ok to Recharge</h1>  
                </div>
                <p className='px-4'>The income per</p>
                <div className='Coin-lists'>
                <ul className='pl-5 pr-2 mb-6'>
                  <li>The income per movie ti</li>
                  <li>The income </li>
                  <li>The income per movie ti</li>
                </ul>
                </div>
               
          </div>
          </Col>
          </Row>
      
      </div>
    );
  }
}

export default Recharge;
