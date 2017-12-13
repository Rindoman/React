import React from 'react';
import filmCard from './filmCard.js';
import MovieCard from './Film-card/Card';


export default class ChipsList extends React.Component {
    render () {
      return (
        <div className="right">
            {filmCard.map((elem,i)=>{return <MovieCard key={elem.id}{...elem} 
            listItem ={elem.genres.map(genre => <li className="ChipsList__item" key ={genre}>{genre}</li>)}/>})}
        </div>
      );
    }
}