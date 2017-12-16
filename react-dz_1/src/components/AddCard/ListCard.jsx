import React from 'react';
import PropTypes from 'prop-types';
import AddCard from 'components/AddCard';

const ListCard = ({ todos, onTodoClick }) => (
  <div>
    {todos.map(t => (
      <AddCard
        key={t.id}
        title={t.title}
        description={t.description}
        rating={t.rating}
        onClick={() => {
          onTodoClick(t.id);
        }}
      />
    ))}
  </div>
);

ListCard.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default ListCard;