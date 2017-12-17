import React from 'react';
import './style.css';

const Sidebar = props => {
  let form = null;
  let inputTxt = null;
  let textArea = null;
  let check = true;

  const _handleFormSubmit = evt => {
    evt.preventDefault();

    const userData = {
      input: inputTxt.value,
      txtArea: textArea.value,
      checkbox1: check.value,
      checkbox2: check.value,
      checkbox3: check.value
    };

    console.log(JSON.stringify(userData));

    form.reset();
  };

  return (<form onSubmit={_handleFormSubmit} ref={node => (form = node)} className="MovieForm">
    <label className="MovieForm__label">Title
      <input type="text" ref={node => {
          inputTxt = node;
        }} className="MovieForm__input"/>
    </label>
    <label className="MovieForm__label">Description
      <textarea ref={node => {
          textArea = node;
        }} className="MovieForm__txtarea" rows="8"></textarea>
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
      <label><input ref={node => {
      check = node;
    }} type="checkbox" value="drama"/>drama</label>
      <label><input ref={node => {
      check = node;
    }} type="checkbox" value="action"/>action</label>
      <label><input ref={node => {
      check = node;
    }} type="checkbox" value="comedy"/>comedy</label>
    </div>
    <button className="MovieForm__submit" type="submit">submit</button>
  </form>);
}

export default Sidebar;
