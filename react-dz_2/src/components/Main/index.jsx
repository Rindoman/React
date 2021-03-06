import React from 'react';
import MovieCard from './MovieCard/MovieCard'
import './style.css';
import filmCard from 'filmCard.js';

export default class Main extends React.Component {
  render() {
    const movieCard = filmCard.map(card => <MovieCard key={card.id} {...card}/>);
    return (
      movieCard
    )
  }
}
