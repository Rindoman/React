import React from 'react';
import Header from 'components/Header';
import Main from 'components/Main';
import Form from 'components/Form'
import ListCard from 'components/ListCard/';
import v4 from 'uuid/v4';
import './style.css';


export default class App extends React.Component {
  state = {
    arrCards: []
  };

  AddNewCard = (title, description, rating) => {
    const list = {
      id: v4(),
      title: title,
      description: description,
      rating: rating
    };

    this.setState({
      arrCards: [...this.state.arrCards, list]
    });
  };

  DelCard = id => {
    this.setState({
      arrCards: this.state.arrCards.filter(list => list.id !== id)
    });
  };

  render() {
    const { arrCards } = this.state;
    return (
      <div className="container">
      <Header/>
      <div className="Container__body">
      <div className="Movie-list">
        <Main/>
        <ListCard arrCards={arrCards} ClickOnCard={this.DelCard} />
        </div>
        <Form onFormSubmit={this.AddNewCard} />
      </div>
    </div>
    );
  }
}
