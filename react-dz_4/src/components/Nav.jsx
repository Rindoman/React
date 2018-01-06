import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = ({ items, currentPath }) => {
  return (    
    <ul className="Navigation">
      {items.map(i => (
        <li key={i.path} className="Navigation__item">
          <Link to={`${currentPath}${i.path}`} className="Navigation__link" >{i.text}</Link>
        </li>
      ))}
    </ul>
  );
};

Nav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  currentPath: PropTypes.string
};

Nav.defaultProps = {
  currentPath: ''
};

export default Nav;
