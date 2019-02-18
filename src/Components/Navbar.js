import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { ButtonContainer } from './Button';
import styled from 'styled-components';
import { ProductConsumer } from './Contects';

export default class Navbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { cart } = value;

          return (
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
              <a href="tel:380633519858">
                <img src={logo} alt="store" />
              </a>
              <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                  <Link to="/" className="nav-link">
                    Products
                  </Link>
                </li>
              </ul>
              <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                  <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                  </span>
                  my cart
                  {cart.length > 0 ? (
                    <div className="counter">{cart.length}</div>
                  ) : null}
                </ButtonContainer>
              </Link>
            </NavWrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue) !important;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  .counter {
    position: absolute;
    border-radius: 50%;
    background: red;
    width: 30px;
    height: 32px;
    color: var(--mainWhite);
  }
`;
