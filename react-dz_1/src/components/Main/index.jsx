import React from 'react';
import MovieCard from './MovieCard/Card'
import  './style.css';
import filmCard from './filmCard.js';
import Sidebar from '../Sidebar/index'

export default class Main extends React.Component {
    render() {
        const movieCard = filmCard.map(card => <MovieCard key={card.id} {...card} />);
        return (           
                <div className="Container__body">
                    <div className="Movie-list">
                        {movieCard}
                    </div>                    
                    <Sidebar />
                </div>
        )
    }
}