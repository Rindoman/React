import React from 'react';

  const MovieCard = ({id, title, poster, overview, release, rating, onClickCard}) => (
    <div className="MovieCard__item">
      <div className="MovieCard">
        <span className="MovieCard__rating">{rating}</span>
        <img src={poster} alt="Poster" className="MovieCard__poster"/>
        <div className="MovieInfo__info">
          <h2 className="MovieInfo__title">{title}</h2>          
          <p className="MovieInfo__description">{overview}</p>
          <p className="MovieInfo__release">{release}</p>
        </div>
        <button className="MovieCard__btn" onClick={evt => {onClickCard(id)}}>+</button>
      </div>
    </div>
  );

export default MovieCard;