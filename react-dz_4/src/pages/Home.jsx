import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from 'components/Nav';
// import styled from 'styled-components';

const navLinks = [
  {
    path: '/about page',
    text: 'About Page'
  },
  {
    path: '/movie gallery',
    text: 'Movie Gallery'
  }
];

const HomePage = props => {
  return (
    <div>
      <Nav items={navLinks} currentPath={props.match.path} />
      <h1>Welcome to Movie Mate</h1>
      <p>This is a single page application that lets you manage all kinds of movies.</p>
      <Switch>
        <p>If you wish to learn more about Movie Mate visit <Route path={`${props.match.path}/about page`} render={() => <p>About Page</p>} />.</p>
        <p>Or start browsing right now in Movie Gallery.</p>
      </Switch>
    </div>
  );
};

export default HomePage;
