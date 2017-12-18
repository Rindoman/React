import React from 'react';
import Header from 'components/Header';
import Main from 'components/Main';
import Form from 'components/Form'
import TodoList from 'components/TodoList/';
import v4 from 'uuid/v4';
import './style.css';


export default class App extends React.Component {
  state = {
    todos: []
  };

  onAddTodo = (title, description) => {
    const todo = {
      id: v4(),
      title: title,
      description: description
    };

    this.setState({
      todos: [...this.state.todos, todo]
    });
  };

  onDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
      <Header/>
      <div className="Container__body">
      <div className="Movie-list">
        <Main/>
        <TodoList todos={todos} onTodoClick={this.onDeleteTodo} />
        </div>
        <Form onFormSubmit={this.onAddTodo} />
      </div>
    </div>
    );
  }
}
