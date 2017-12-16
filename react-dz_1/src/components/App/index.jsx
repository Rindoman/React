import React from 'react';
import Header from 'components/Header';
import Main from 'components/Main';
import './style.css';

// import v4 from 'uuid/v4';
// import AddCard from 'components/AddCard';

export default class App extends React.Component {
    // state = {
    //     todos: []
    //   };
    
    //   onAddTodo = text => {
    //     const todo = {
    //       id: v4(),
    //       text: text
    //     };
    
    //     this.setState({
    //       todos: [...this.state.todos, todo]
    //     });
    //   };
    
    //   onDeleteTodo = id => {
    //     this.setState({
    //       todos: this.state.todos.filter(todo => todo.id !== id)
    //     });
    //   };
    render() {
        // const { todos } = this.state;
        return (
            <div className="container">
                <Header />
                <Main /> 
                    
                    {/* <AddCard todos={todos} onTodoClick={this.onDeleteTodo} /> */}
                               
            </div>
        )
    }
}