import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from 'components/Nav';

const navLinks = [
  {
    path: '/the team',
    text: 'The Team'
  },
  {
    path: '/our stack',
    text: 'Our Stack'
  },
  {
    path: '/career',
    text: 'Career'
  }
];

const AboutPage = props => (
  <div>
    <Nav items={navLinks} currentPath={props.match.path} />
    <Switch>
      <Route path={`${props.match.path}/the team`} render={() => <h3>TEAM</h3>} />
      <Route path={`${props.match.path}/our stack`} render={() => <h3>COMPANY</h3>} />
      <Route path={`${props.match.path}/career`} render={() => <h3>STORY</h3>} />
    </Switch>
  </div>
);

export default AboutPage;
