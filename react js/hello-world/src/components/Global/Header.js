//Dependencies
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

//Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  }

  render() {
    const {title,items} = this.props

    return (
      <div className="Header">
        <header>
          <img src={logo}  className="Header-logo" alt="logo" />
          <h2>{title}</h2>
          <ul className="Header-menu">
            {items && items.map( (item,key) =><li key={key}> <Link to={item.url}> {item.title} </Link> </li> )}
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
