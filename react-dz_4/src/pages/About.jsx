import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import TeamPage from 'pages/Team';
import StackPage from 'pages/Stack';
import CareerPage from 'pages/Career';

const AboutPage = ({ match }) => {
    return (
      <div className="AboutPage">
        <div className="AboutPage__nav">
          <nav className="AboutNav">
            <NavLink to={`${match.path}/team`} className="AboutNav__link" activeClassName="AboutNav__link--active">The team</NavLink>
            <NavLink to={`${match.path}/stack`} className="AboutNav__link" activeClassName="AboutNav__link--active">our stack</NavLink>
            <NavLink to={`${match.path}/career`} className="AboutNav__link" activeClassName="AboutNav__link--active">career</NavLink>
          </nav>
        </div>
        <div className="AboutPage__body">
          <Switch>
            <Route path={`${match.path}/team`} component={TeamPage}/>
            <Route path={`${match.path}/stack`} component={StackPage}/>
            <Route path={`${match.path}/career`} component={CareerPage}/>
          </Switch>
        </div>
      </div>
    )
  }
export default AboutPage;
