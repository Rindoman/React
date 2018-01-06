import React from 'react'
import PropTypes from 'prop-types';

    const WatchlistCard = ({id, title, poster, release, rating, onDelCard}) => (
        <div className="WatchlistCard">
            <img className="WatchlistCard__img" src={poster} alt="Poster"/>
            <div className="WatchlistCard__body">
                <h3 className="WatchlistCard__title">{title}</h3>
                <p className="WatchlistCard__release">Released: {release}</p>
                <p className="WatchlistCard__rating">Rating: {rating}</p>
                <button className="WatchlistCard__btn" onClick={() => {onDelCard(id)}}>-</button>
            </div>
        </div>
    );

    WatchlistCard.propTypes = {
        onDelCard: PropTypes.func.isRequired,
        id: PropTypes.number,
        poster: PropTypes.string,
        title: PropTypes.string,
        release: PropTypes.string,
        rating: PropTypes.number
    }

export default WatchlistCard;