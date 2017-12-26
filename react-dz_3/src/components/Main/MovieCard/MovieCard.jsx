import React from 'react';

  const MovieCard = ({title, poster, overview, release, rating, onClick}) => (
    <div className="MovieCard__item">
      <div className="MovieCard">
        <span className="MovieCard__rating">{rating}</span>
        <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="Poster" className="MovieCard__poster"/>
        <div className="MovieInfo__info">
          <h2 className="MovieInfo__title">{title}</h2>
          <button className="MovieCard__btn" onClick={onClick}>+</button>
          <p className="MovieInfo__description">{overview}</p>
          <p className="MovieInfo__release">{release}</p>
        </div>
      </div>
    </div>
  );

export default MovieCard;