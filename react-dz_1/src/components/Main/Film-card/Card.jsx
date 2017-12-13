import React from 'react';
import PropTypes from 'prop-types';
// import ChipsList from 'ChipsList';

export default class MovieCard extends React.Component {
    render() {
        const { title, description, rating, genres } = this.props;
        return (
                <div className="MovieCard">
                    <div className="MovieInfo__info">
                        <h2 className="MovieInfo__title">{title}</h2>
                        <button className="MovieCard__btn">Delete</button>
                        <p className="MovieInfo__description">{description}</p>
                        <p className="MovieInfo__release">{rating}</p>
                    </div>
                        <ul className="ChipsList">{genres}
                            <li className="ChipsList__item"></li>                            
                        </ul>
                </div>
        );
    }
}
MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.string.isRequired
};