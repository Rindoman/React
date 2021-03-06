import React from 'react';
import './style.css';
import v4 from 'uuid/v4';

const Header = props => {
  const nav = ['log in', 'browse', 'about'].map(elem => <li key={v4()} className="Navigation__item">
    <a href="" className="Navigation__link">{elem}</a></li>);
  return (<header className="Header">
    <h1 className="Header__logo">movie mate</h1>
    <ul className="Navigation">{nav}</ul>
  </header>);
}

export default Header;
