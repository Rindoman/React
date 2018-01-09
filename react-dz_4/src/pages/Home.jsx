import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = props => {
  return (
    <div className="Home">
        <img src="https://axzerk.github.io/react-minicourse/hw-04/static/media/clapperboard.2e065d52.svg" alt="icon" className="Home__icon"/>
        <h1 className="Home__title">Welcome to Movie Mate</h1>
        <p className="Home__text">This is a single page application that lets you manage all kinds of movies.</p>
        <p className="Home__text">If you wish to learn more about Movie Mate visit
          <Link to="/about" className="Home__link">About Page</Link>
        </p>
        <p className="Home__text">Or start browsing right now in
          <Link to="/movies" className="Home__link">Movie Gallery</Link>
        </p>
    </div>
  ); 
};

export default HomePage;
