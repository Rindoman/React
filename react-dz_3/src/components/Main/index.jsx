import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard/MovieCard'

const Main = ({ filmCard }) => {
  return (
    <>{filmCard.map(card => <MovieCard key={card.id} {...card} />)}</>
  )
}

export default Main;