import React from 'react';
import v4 from 'uuid';

export default class Select extends React.Component {
  render () {

    return (    
    <select className="MovieForm__input">
        {items.map( idx => <option key={v4()}>{idx+1}</option>)}
    </select>)
  }
}