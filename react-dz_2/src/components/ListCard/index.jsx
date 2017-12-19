import React from 'react';
import PropTypes from 'prop-types';
import AddCard from 'components/AddCard/';

const ListCard = ({ arrCards, ClickOnCard }) => (  
    arrCards.map(t => (
      <AddCard
        key={t.id}
        title={t.title}
        description={t.description}
        rating={t.rating}
        onClick={() => {
          ClickOnCard(t.id);
        }}
      />
    )) 
);

ListCard.propTypes = {
  arrCards: PropTypes.arrayOf(
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
