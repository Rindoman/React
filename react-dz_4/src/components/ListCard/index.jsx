import React from 'react';
import MovieCard from 'components/Main/MovieCard/MovieCard';

const ListCard = ({ filmCard, ClickOnCard }) => (  
    filmCard.map(t => (
      <MovieCard
        key={t.id}
        {...t}
        onClickCard={() => {
          ClickOnCard(t.id);
        }}
      />
    )) 
);

export default ListCard;
