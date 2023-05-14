/**
 *
 * Shop
 *
 */

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Input from '../../components/Common/Input';
class SubmitRecharge extends React.PureComponent {
  render() {
    return (
      <div className='shop buyCoin'>
         <Row>
         <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-0 recharge-balance'>
        <h1 className='text-center gold-color'>Submit Recharge</h1>
              <div className='px-0 buycoin-btn pb-3'>
                      <h1 className='py-2 px-4 gold-color bg-theme ok-to-recharge text-left font-size-12'>sjwsnkwsqkwknnkwjkkmwkwmkwwk <span className='py-1 px-2 float-right copy-btn color-black bg-gold'>Copy</span></h1> 
              </div>
          </Col>
          
                <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-2 recharge-qr-code recharge-input'>
                <img 
                    src={'./images/qa-code-recharge.png'} 
                    alt="Coin" 
                />
              </Col>
               <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-2 recharge-input'>
                  <Input
                        type={'text'}
                        label={'Transaction Number'}
                        name={'email'}
                        placeholder={'XXXXXXXXXXXXXXXX'}
                      />
              </Col>
              <h1 className='text-center ml-2 font-size-14 font-weight-normal'>Recharge Screenshot</h1>
              <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-2 recharge-image-choose recharge-input' style={{ 
      backgroundImage: `url("./images/backgroung-choose-image.png")` 
    }}>
              <Input
              type={'file'}
              name={'image'}
              placeholder={'Please Upload Image'}
            />
              </Col>
           
            <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-0'>
        <div>
        <div className='px-0 buycoin-btn pb-3 mb-5'>
                <h1 className='py-2 px-4 gold-color bg-theme ok-to-recharge'>Complete Recharge</h1>  
                </div>
          </div>
          </Col>
          <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-0'>
        <div>
        <h1 className='text-left font-size-14 pl-2 font-normal'>Submit Recharge</h1>
          </div>
          </Col>
          </Row>
      
      </div>
    );
  }
}

export default SubmitRecharge;
