/**
 *
 * Navigation
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Link, NavLink as ActiveLink, withRouter } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';

import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import actions from '../../actions';

import Button from '../../components/Common/Button';
import CartIcon from '../../components/Common/CartIcon';
import { BarsIcon } from '../../components/Common/Icon';
import MiniBrand from '../../components/Store//MiniBrand';
import Menu from '../NavigationMenu';
import Cart from '../Cart';

class Navigation extends React.PureComponent {
  componentDidMount() {
    this.props.fetchStoreBrands();
    this.props.fetchStoreCategories();
  }

  toggleBrand() {
    this.props.fetchStoreBrands();
    this.props.toggleBrand();
  }

  toggleMenu() {
    this.props.fetchStoreCategories();
    this.props.toggleMenu();
  }

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  renderSuggestion(suggestion, { query, isHighlighted }) {
    const BoldName = (suggestion, query) => {
      const matches = AutosuggestHighlightMatch(suggestion.name, query);
      const parts = AutosuggestHighlightParse(suggestion.name, matches);

      return (
        <div>
          {parts.map((part, index) => {
            const className = part.highlight
              ? 'react-autosuggest__suggestion-match'
              : null;
            return (
              <span className={className} key={index}>
                {part.text}
              </span>
            );
          })}
        </div>
      );
    };

    return (
      <Link to={`/product/${suggestion.slug}`}>
        <div className='d-flex'>
          <img
            className='item-image'
            src={`${
              suggestion.imageUrl
                ? suggestion.imageUrl
                : '/images/placeholder-image.png'
            }`}
          />
          <div>
            <Container>
              <Row>
                <Col>
                  <span className='name'>{BoldName(suggestion, query)}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className='price'>${suggestion.price}</span>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Link>
    );
  }

  render() {
    const {
      history,
      authenticated,
      user,
      cartItems,
      brands,
      categories,
      signOut,
      isMenuOpen,
      isCartOpen,
      isBrandOpen,
      toggleCart,
      toggleMenu,
      searchValue,
      suggestions,
      onSearch,
      onSuggestionsFetchRequested,
      onSuggestionsClearRequested
    } = this.props;

    const inputProps = {
      placeholder: 'Search Products',
      value: searchValue,
      onChange: (_, { newValue }) => {
        onSearch(newValue);
      }
    };

    return (
      <header className='header fixed-mobile-header'>
        <Container>
  <Row className='align-items-center top-header'>
    <Col
      xs={{ size: 6, order: 1 }}
      sm={{ size: 6, order: 1 }}
      md={{ size: 6, order: 1 }}
      lg={{ size: 6, order: 1 }}
      className='pr-0'
    >
      <div className='brand'>
      
          <Button
            borderless
            variant='empty'
            className='d-md-block'
            ariaLabel='open the menu'
            icon={<BarsIcon />}
            onClick={() => this.toggleMenu()}
          />
        
      </div>
    </Col>
    <Col
      xs={{ size: 6, order: 2 }}
      sm={{ size: 6, order: 2 }}
      md={{ size: 6, order: 2 }}
      lg={{ size: 6, order: 2 }}
      className='text-right'
    >
       <Link to='/'>
          <h1 className='logo'>CAPITAL BOOSTUP</h1>
        </Link>
    </Col>
    </Row>
    </Container>
<div
  className={isCartOpen ? 'mini-cart-open' : 'hidden-mini-cart'}
  aria-hidden={`${isCartOpen ? false : true}`}
>
  <div className='mini-cart'>
    <Cart />
  </div>
  <div
    className={
      isCartOpen ? 'drawer-backdrop dark-overflow' : 'drawer-backdrop'
    }
    onClick={toggleCart}
  />
</div>

{/* hidden menu drawer */}
<div
  className={isMenuOpen ? 'mini-menu-open' : 'hidden-mini-menu'}
  aria-hidden={`${isMenuOpen ? false : true}`}
>
  <div className='mini-menu'>
    <Menu />
  </div>
  <div
    className={
      isMenuOpen ? 'drawer-backdrop dark-overflow' : 'drawer-backdrop'
    }
    onClick={toggleMenu}
  />
</div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    isMenuOpen: state.navigation.isMenuOpen,
    isCartOpen: state.navigation.isCartOpen,
    isBrandOpen: state.navigation.isBrandOpen,
    cartItems: state.cart.cartItems,
    brands: state.brand.storeBrands,
    categories: state.category.storeCategories,
    authenticated: state.authentication.authenticated,
    user: state.account.user,
    searchValue: state.navigation.searchValue,
    suggestions: state.navigation.searchSuggestions
  };
};

export default connect(mapStateToProps, actions)(withRouter(Navigation));