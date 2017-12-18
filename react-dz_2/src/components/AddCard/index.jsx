import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

  const AddCard = ({ title, onClick, description }) => (
  <div className="MovieCard">
  <div className="MovieInfo__info">
    <h2 className="MovieInfo__title">{title}</h2>
    <button className="MovieCard__btn" onClick={onClick}>Delete</button>
    <p className="MovieInfo__description">{description}</p>
  </div>
</div>

);

AddCard.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
  description: PropTypes.func.isRequired
};

export default AddCard;
