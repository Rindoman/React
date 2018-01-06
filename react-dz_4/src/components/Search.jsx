import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button'

const Search = ({url}) => {

    return (<div className="Search-categories">
        <Button text="popular" onClick={() => url('https://api.themoviedb.org/3/movie/popular?api_key=f24a0fd18f52218851075901c5a108a0&language=en-US&page=1')}/>
        <Button text="top rated" onClick={() => url('https://api.themoviedb.org/3/movie/top_rated?api_key=f24a0fd18f52218851075901c5a108a0&language=en-US&page=1')}/>
        <Button text="upcoming" onClick={() => url('https://api.themoviedb.org/3/movie/upcoming?api_key=f24a0fd18f52218851075901c5a108a0&language=en-US&page=1')}/>
    </div>);
}

Search.propTypes = {
    url: PropTypes.func.isRequired
}
export default Search;
