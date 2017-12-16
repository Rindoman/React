import React from 'react';
import PropTypes from 'prop-types';

const AddCard = ({ title, description, rating, onClick }) => (
    <div className="MovieCard">
        <div className="MovieInfo__info">
            <h2 className="MovieInfo__title">{title}</h2>
            <button className="MovieCard__btn" onClick={onClick}>Delete</button>                        
            <p className="MovieInfo__description">{description}</p>
            <p className="MovieInfo__release">{rating}</p>
        </div>
            {/* <ul className="ChipsList">{listItem}</ul> */}
    </div>
  );
  
  AddCard.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };
  

  
  export default AddCard;
