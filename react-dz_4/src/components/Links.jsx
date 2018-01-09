import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Links = ({ items, currentPath }) => {
  return (    
    <ul className="Navigations">
      {items.map(i => (
        <li key={i.path} className="Navigations__item">
          <NavLink to={`${currentPath}${i.path}`} className="Navigations__link" activeClassName="Navigations__link--active" >{i.text}</NavLink>
        </li>
      ))}
    </ul>
  );
};

Links.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  currentPath: PropTypes.string
};

Links.defaultProps = {
  currentPath: ''
};

export default Links;
