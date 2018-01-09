import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => (
    <nav className="Navigation">
        <NavLink exact to="/" activeClassName="Navigation__link--active" className="Navigation__link">Home</NavLink>
        <NavLink to="/movies" activeClassName="Navigation__link--active" className="Navigation__link">movies</NavLink>
        <NavLink to="/about" activeClassName="Navigation__link--active" className="Navigation__link">about</NavLink>
    </nav>
);

export default Nav;
