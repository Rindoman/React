import React from 'react';
import Header from 'components/Header';
import Main from 'components/Main';
import './style.css';
import Sidebar from 'components/Sidebar/index'

export default class App extends React.Component {

  render() {
    return (<div className="container">
      <Header/>
      <div className="Container__body">
        <Main/>
        <Sidebar onFormSubmit={this.onAddTodo}/>
      </div>
    </div>)
  }
}
