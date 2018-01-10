import React,  { Component } from 'react';
import Sidebar from 'components/Sidebar';
import ListCard from 'components/ListCard';
import {fetchData, fetchDataFilms, fetchPopular} from 'API_';

class MoviePage extends Component {
    state = {
        filmCard: [],
        watchList: []
    };

    handleFormSubmit = query => {
        fetchData(query).then(data => {
            return (query !== '')
              ?  this.setState({filmCard: data})
              :  alert('Enter something!')
        });
    }

    componentWillMount() {
        fetchPopular().then(data => {
            this.setState({filmCard: data, 
                watchList: JSON.parse(localStorage.getItem('WatchList')) || []
            });
        });
    }

    delWatchList = id => {
        let watchList = this.state.watchList.filter(movie => movie.id !== id);
        this.setState(prevState => ({filmCard: prevState.filmCard, watchList: watchList}));
        localStorage.setItem('WatchList', JSON.stringify(watchList));
        this.setState({watchList: watchList});
    }

    addWatchList = id => {
        if (this.state.watchList.filter(movie => movie.id === id).length === 0) {
            let watchListItem = this.state.filmCard.filter(movie => movie.id === id);
            this.setState(prevState => ({
                filmCard: prevState.filmCard,
                watchList: [
                    ...prevState.watchList,
                    ...watchListItem
                ]
            }),
            () => {
                let watchList = JSON.stringify(this.state.watchList);
                localStorage.setItem('WatchList', watchList);
            })
        } else {
            alert('This movie has already been added');
        }
    }

    getUrl = (url) => {
        fetchDataFilms(url).then(data => {
            this.setState({filmCard: data})
        })
    }

    render() {
        const {filmCard, watchList} = this.state;
        return (<div className="container">
            <div className="Container__body">
                <Sidebar
                    url={this.getUrl}
                    searchFormSubmit={this.handleFormSubmit}
                    watchListData={watchList}
                    onDelCard={this.delWatchList}
                />
                <div className="Movie-list">
                    <ListCard ClickOnCard={this.addWatchList} filmCard={filmCard}/>
                </div>
            </div>
        </div>);
    }
}
export default MoviePage;