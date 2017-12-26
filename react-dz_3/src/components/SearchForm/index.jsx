import React from 'react';
import './style.css';

  const SearchForm = ({ onFormSubmit }) => {
    let input = null;

  return (
    <div className="container__sidebar">
      <form className="Search-form"
        onSubmit={evt => {
          evt.preventDefault();
          onFormSubmit(input.value);
        }}>
        <input type="text" className="Search-form__input" ref={node => (input = node)} placeholder="Search for movies by name..."/>
        <button className="Search-categories__btn">search</button>
      </form>
      <div className="Search-categories">
        <button className="Search-categories__btn">popular</button>
        <button className="Search-categories__btn">top rated</button>
        <button className="Search-categories__btn">upcoming</button>
      </div>
      <div className="Watch-list">
        <h2 className="Watch-list__title">Watchlist</h2>
        <p className="Watch-list__msg">Add movies to watchlist...</p>
      </div>
    </div>
  );
}
export default SearchForm;