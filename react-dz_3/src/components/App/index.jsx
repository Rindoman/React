import React from 'react';
import Header from 'components/Header';
import SearchForm from 'components/SearchForm'
import ListCard from 'components/ListCard/';
import { fetchData } from 'API';


export default class App extends React.Component {
  state = {
    filmCard: []
  };

  handleFormSubmit = query => {
    fetchData(query).then(data => {
      this.setState({
        filmCard: data
      });
    });
  };

  componentWillMount() {
    fetchData('cat').then(data => {
      this.setState({
        filmCard: data
      });
    });
  }

  // AddNewCard = (title, description, rating, genres) => {
  //   const list = {
  //     id: v4(),
  //     title: title,
  //     description: description,
  //     rating: `Rating: ${rating}/10`,
  //     genres: []
  //   };

  //   this.setState({
  //     filmCard :[...this.state.filmCard, list]
  //   })
  // };

  DelCard = id => {
    this.setState({
      filmCard: this.state.filmCard.filter(list => list.id !== id)
    });
  };

  render() {
    const { filmCard } = this.state;
    return (
      <div className="container">
        <Header/>
        <div className="Container__body">
          <div className="Movie-list">
            <ListCard filmCard={filmCard} ClickOnCard={this.DelCard} />
          </div>
          <SearchForm onFormSubmit={this.handleFormSubmit} />
        </div>
      </div>
    );
  }
} 
