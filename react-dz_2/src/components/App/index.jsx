import React from 'react';
import Header from 'components/Header';
import Form from 'components/Form'
import ListCard from 'components/ListCard/';
import filmCard from 'filmCard.js';
import v4 from 'uuid/v4';
import './style.css';
import 'components/Main/style.css';


export default class App extends React.Component {
  state = {
    filmCard: filmCard
  };

  addNewCard = (title, description, rating, genres) => {
    const list = {
      id: v4(),
      title: title,
      description: description,
      rating: `Rating: ${rating}/10`,
      genres: []
    };

    this.setState({
      filmCard :[...this.state.filmCard, list]
    })
  };

  delCard = id => {
    this.setState({
      filmCard: this.state.filmCard.filter(list => list.id !== id)
    });
  };

  render() {

    return (
      <div className="container">
      <Header/>
      <div className="Container__body">
      <div className="Movie-list">
        <ListCard filmCard={this.state.filmCard} clickOnCard={this.delCard} />
        </div>
        <Form onFormSubmit={this.addNewCard} />
      </div>
    </div>
    );
  }
} 
