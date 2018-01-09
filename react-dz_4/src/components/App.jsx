import React,  { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header'
import MoviePage from './MoviePage'
import HomePage from 'pages/Home';
import AboutPage from 'pages/About';

  export default class App extends Component {
    addActiveClass() {
        this._сlassNavLinks();
    }

    _сlassNavLinks = () => {
        const NavLinks = document.querySelectorAll('.Navigations__link');
        NavLinks.forEach(link => {
            link.addEventListener('click', evt => {
                NavLinks.forEach(link => {
                    link.classList.remove('Navigations__link--active');
                })
                link.classList.add('Navigations__link--active');
            });
        })
    }
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