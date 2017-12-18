import React from 'react';
import PropTypes from 'prop-types';
import AddCard from 'components/AddCard/';

const TodoList = ({ todos, onTodoClick }) => (  
    todos.map(t => (
      <AddCard
        key={t.id}
        title={t.title}
        description={t.description}
        onClick={() => {
          onTodoClick(t.id);
        }}
      />
    )) 
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
