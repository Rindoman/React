import React from 'react';
import PropTypes from 'prop-types';
import WatchlistCard from './WatchlistCard';

const WatchList = ({
    card = '',
    onDelCard
}) => {     
    return (card.length > 0)
        ? <div className="Watchlist">
            <h2 className="Watchlist__title">Watchlist</h2>
            {card.map(t => <WatchlistCard onDelCard={onDelCard} key={t.id} {...t}/>)}
        </div>
        : <div className="Watchlist">
            <h2 className="Watchlist__title">Watchlist</h2>
            <p className="Watchlist__msg">Add movies to watchlist...</p>
        </div>;
}
    WatchList.propTypes = {
        onDelCard: PropTypes.func.isRequired,
        card: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            poster: PropTypes.string,
            release: PropTypes.string,
            rating: PropTypes.number
        }))
    }

export default WatchList;
