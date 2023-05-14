/*
 *
 * Login
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';
import LoadingIndicator from '../../components/Common/LoadingIndicator';
import SignupProvider from '../../components/Common/SignupProvider';

class Login extends React.PureComponent {
  render() {
    const {
      authenticated,
      loginFormData,
      loginChange,
      login,
      formErrors,
      isLoading,
      isSubmitting
    } = this.props;

    if (authenticated) return <Redirect to='/dashboard' />;

    const registerLink = () => {
      this.props.history.push('/register');
    };

    const handleSubmit = event => {
      event.preventDefault();
      login();
    };

    return (
      <div>
         <div className='shop buyCoin'>
         <Row>
         <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-0 recharge-balance'>
        <h1 className='text-center gold-color mt-3'>Create Account</h1>
        <p className='px-4'>A Money booster marketplace of your dreams. Join Now ! </p>
          </Col>
              <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-4 login-form-input'>
                  <Input
                        type={'text'}
                        label={'Your Email'}
                        name={'walletid'}
                      />
              </Col>
              <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-4 login-form-input'>
                  <Input
                        type={'text'}
                        label={'Your Password'}
                        name={'walletid'}
                      />
              </Col>

            
          <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-0'>
                <p className='px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lore
                                      ipsum dolor sit amet, consectetur adipiscing elit</p>
          </Col>
          <Col xs='12' lg='12' sm='12' md='12' className='mb-5 px-0'>
        <div className='px-0 buycoin-btn pb-3 mb-3'>
                <h1 className='py-2 px-4 color-black bg-gold ok-to-recharge create-account-btn'>Create Account</h1>  
                </div>    
                <p className='px-4 mb-5 text-center'>You have an account? <Link to='/'>
                <span className='color-gold'> Sign in</span> 
        </Link></p>
          </Col>
          </Row>
      
      </div>

      {/* already builted form start*/}
      <div className='login-form'>
        {isLoading && <LoadingIndicator />}
        <h2>Login</h2>
        <hr />
        <form onSubmit={handleSubmit} noValidate>
          <Row>
            <Col
              xs={{ size: 12, order: 2 }}
              md={{ size: '6', order: 1 }}
              className='p-0'
            >
              <Col xs='12' md='12'>
                <Input
                  type={'text'}
                  error={formErrors['email']}
                  label={'Email Address'}
                  name={'email'}
                  placeholder={'Please Enter Your Email'}
                  value={loginFormData.email}
                  onInputChange={(name, value) => {
                    loginChange(name, value);
                  }}
                />
              </Col>
              <Col xs='12' md='12'>
                <Input
                  type={'password'}
                  error={formErrors['password']}
                  label={'Password'}
                  name={'password'}
                  placeholder={'Please Enter Your Password'}
                  value={loginFormData.password}
                  onInputChange={(name, value) => {
                    loginChange(name, value);
                  }}
                />
              </Col>
            </Col>
            <Col
              xs={{ size: 12, order: 1 }}
              md={{ size: '6', order: 2 }}
              className='mb-2 mb-md-0'
            >
              <SignupProvider />
            </Col>
          </Row>
          <hr />
          <div className='d-flex flex-column flex-md-row align-items-md-center justify-content-between'>
            <div className='d-flex justify-content-between align-items-center mb-3 mb-md-0'>
              <Button
                type='submit'
                variant='primary'
                text='Login'
                disabled={isSubmitting}
              />
              <Button
                text='Create an account'
                variant='link'
                className='ml-md-3'
                onClick={registerLink}
              />
            </div>
            <Link
              className='redirect-link forgot-password-link'
              to={'/forgot-password'}
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authentication.authenticated,
    loginFormData: state.login.loginFormData,
    formErrors: state.login.formErrors,
    isLoading: state.login.isLoading,
    isSubmitting: state.login.isSubmitting
  };
};

export default connect(mapStateToProps, actions)(Login);
