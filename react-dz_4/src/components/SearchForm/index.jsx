import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

  const SearchForm = ({ onFormSubmit }) => {
    let input = null;

  return (
      <form className="Search-form"
        onSubmit={evt => {
          evt.preventDefault();
          onFormSubmit(input.value);
        }}>
        <input type="text" className="Search-form__input" ref={node => (input = node)} placeholder="Search for movies by name..."/>
        <button className="Search-categories__btn">search</button>
      </form>
  );
}

SearchForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired
}

export default SearchForm;