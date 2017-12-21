import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class AddTodoForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired
  };

  state = {
    inputValue: '',
    inputArea: '',
    rating: '1'
  };

  _handleInputChange = evt => {
    const value = evt.target.value;

    this.setState({
      inputValue: value
    });
  };
  
  _handleInputAreaChange = evt => {
    const value = evt.target.value;

    this.setState({
      inputArea: value
    });
  };

  _handleRatingChange = evt => {
    const value = evt.target.value;

    this.setState({
      rating: value
    });
  };

  _handleSubmit = evt => {    
    evt.preventDefault();
    if (this.state.inputValue !== '' && this.state.inputArea !== '') {
      this.props.onFormSubmit(this.state.inputValue, this.state.inputArea, this.state.rating);
    } else {
      alert ('Заполните поля!');
    }

    this.setState({
      inputValue: '',
      inputArea: '',
      rating: '1'
    });
  };
 
  render() {
    const { inputValue, inputArea, rating } = this.state;

  return (
    <form onSubmit={this._handleSubmit} className="MovieForm">
      <label className="MovieForm__label">Title
        <input type="text"
          value={inputValue}
          onChange={this._handleInputChange}
          className="MovieForm__input"/>
      </label>
      <label className="MovieForm__label">Description
        <textarea 
          value={inputArea}
          onChange={this._handleInputAreaChange}
          className="MovieForm__txtarea" rows="8">
        </textarea>
      </label>
      <label className="MovieForm__label">Rating
        <select value={rating}
          onChange={this._handleRatingChange} className="MovieForm__input">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </label>
      <div className="MovieForm__genres">
        <label><input type="checkbox" value="drama"/>drama</label>
        <label><input type="checkbox" value="action"/>action</label>
        <label><input type="checkbox" value="comedy"/>comedy</label>
      </div>
      <button className="MovieForm__submit" type="submit">submit</button>
    </form>
  );
  }
}
