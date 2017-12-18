import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class AddTodoForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired
  };

  state = {
    inputValue: '',
    inputArea: ''
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

  _handleSubmit = evt => {
    evt.preventDefault();

    this.props.onFormSubmit(this.state.inputValue);
    this.props.onFormSubmit(this.state.inputArea);

    this.setState({
      inputValue: '',
      inputArea: ''
    });
  };

  render() {
    const { inputValue, inputArea } = this.state;
    // console.log(JSON.stringify(inputArea));
    // console.log(JSON.stringify(inputValue));
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
        <select className="MovieForm__input">
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
