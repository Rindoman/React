import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

  const AddCard = ({ title, onClick, description, rating }) => (
  <div className="MovieCard">
    <div className="MovieInfo__info">
      <h2 className="MovieInfo__title">{title}</h2>
      <button className="MovieCard__btn" onClick={onClick}>Delete</button>
      <p className="MovieInfo__description">{description}</p>
      <p className="MovieInfo__release">{rating}</p>
    </div>
  </div>
  );

AddCard.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
};

export default AddCard;
