import React from 'react';
import PropTypes from 'prop-types';
import v4 from 'uuid/v4';

export default class MovieCard extends React.Component {
  static propTypes = {
    onClick: PropTypes.func
  };

  static defaultProps = {
    onClick: () => {
      console.log(1);
    }
  };
  render() {
    const {onClick} = this.props;
    const {title, description, rating, genres} = this.props;
    const listItem = genres.map(genre => <li className="ChipsList__item" key={v4()}>{genre}</li>);

    return (<div className="MovieCard">
      <div className="MovieInfo__info">
        <h2 className="MovieInfo__title">{title}</h2>
        <button className="MovieCard__btn" onClick={onClick}>Delete</button>
        <p className="MovieInfo__description">{description}</p>
        <p className="MovieInfo__release">{rating}</p>
      </div>
      <ul className="ChipsList">{listItem}</ul>
    </div>);
  }
}
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
};
