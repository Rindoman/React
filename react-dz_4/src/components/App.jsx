import React,  { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MoviePage from './MoviePage'
import Nav from './Nav';
import HomePage from 'pages/Home';
import AboutPage from 'pages/About';

const navLinks = [
    {
        path: '/about',
        text: 'about'
    },
    {
        path: '/movies',
        text: 'movies'
    },
    {
        path: '/',
        text: 'home'
    }
  ];

class App extends Component {

    render() {
        return (<div className="container">
            <header className="Header">
                <h1 className="Header__logo">movie mate</h1>
                <Nav items={navLinks} />
            </header>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/movies" component={MoviePage} />
                <Route path="/about" component={AboutPage} />
                <Redirect to="/" />
            </Switch>
        </div>);
    }
}
export default App;