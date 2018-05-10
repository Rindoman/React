import React from 'react';
import PropTypes from 'prop-types';
export default class MovieCard extends React.Component {

  render() {
    const {title, description, rating, genres, onClick} = this.props;
    const listItem = genres.map(genre => <li className="ChipsList__item" key={genre}>{genre}</li>);

    return (
    <div className="MovieCard">
      <div className="MovieInfo__info">
        <h2 className="MovieInfo__title">{title}</h2>
        <button className="MovieCard__btn" onClick={onClick}>Delete</button>
        <p className="MovieInfo__description">{description}</p>
        <p className="MovieInfo__release">{rating}</p>
      </div>
      <ul className="ChipsList">{listItem}</ul>
    </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};