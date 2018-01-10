import React,  { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header'
import MoviePage from 'pages/MoviePage'
import HomePage from 'pages/Home';
import AboutPage from 'pages/About';

  export default class App extends Component {

    render() {
        return (<div className="container">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/movies" component={MoviePage} />
                <Route path="/about" component={AboutPage} />
                <Redirect to="/" />
            </Switch>
        </div>);
    }
}