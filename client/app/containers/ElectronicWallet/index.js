/**
 *
 * Shop
 *
 */

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Input from '../../components/Common/Input';
class ElectronicWallet extends React.PureComponent {
  render() {
    return (
      <div className='shop buyCoin'>
         <Row>
         <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-0 recharge-balance'>
        <h1 className='text-center gold-color mt-1'>Electronic Wallet</h1>
          </Col>
            <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-2 recharge-input'>
                  <Input
                        type={'text'}
                        label={'Wallet Type'}
                        name={'walletid'}
                      />
              </Col>
              <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-2 withdraw-walet'>
                  <Input
                        type={'text'}
                        label={'WalletADD:'}
                        name={'walletid'}
                      />
              </Col>
              <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-2 withdraw-walet'>
                  <Input
                        type={'text'}
                        label={'FundingPW:'}
                        name={'walletid'}
                      />
              </Col>

            
          <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-0'>
                <p className='px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lore
                                      ipsum dolor sit amet, consectetur adipiscing elit</p>
          </Col>
          <Col xs='12' lg='12' sm='12' md='12' className='mb-5 px-0'>
        <div className='px-0 buycoin-btn pb-3 mb-3'>
                <h1 className='py-2 px-4 mb-5 gold-color bg-theme ok-to-recharge'>Confirm</h1>  
                </div>    
          </Col>
          </Row>
      
      </div>
    );
  }
}

export default ElectronicWallet;
