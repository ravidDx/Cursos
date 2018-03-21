import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header>
          <img src={logo}  className="Header-logo" alt="logo" />
          <h2>Hello world React JS</h2>
        </header>
      </div>
    );
  }
}

export default Header;
