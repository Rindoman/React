import React from 'react';
import Nav from './Nav';

const navLinks = [
  {
      path: '/about',
      text: 'about'
  },
  {
      path: '/movies',
      text: 'movies'
  },
  {
      path: '/',
      text: 'home'
  }
];

const Header = props => {
  return (<header className="Header">
    <h1 className="Header__logo">movie mate</h1>
    <Nav items={navLinks} />
  </header>);
}

export default Header;
