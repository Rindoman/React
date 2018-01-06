import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import Search from './Search';
import WatchList from './Watchlist';

const Sidebar = ({ searchFormSubmit, url, watchListData, onDelCard }) => {
    return (
        <div className="container__sidebar">
            <SearchForm onFormSubmit={searchFormSubmit}/>
            <Search url={url} />
            <WatchList card={watchListData} onDelCard={onDelCard}/>
        </div>
    )
};
Sidebar.propTypes = {
    onDelCard: PropTypes.func.isRequired,
    searchFormSubmit: PropTypes.func.isRequired,
    url: PropTypes.func.isRequired,
    watchListData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            poster: PropTypes.string,
            release: PropTypes.string,
            rating: PropTypes.number
        })
    )
}
export default Sidebar;