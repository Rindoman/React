import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from 'components/Main/MovieCard/MovieCard';

const ListCard = ({ filmCard, ClickOnCard }) => (  
    filmCard.map(t => (
      <MovieCard
        {...t}
        onClick={() => {
          ClickOnCard(t.id);
        }}
      />
    )) 
);

ListCard.propTypes = {
  filmCard: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  ClickOnCard: PropTypes.func.isRequired
};

export default ListCard;
