import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import UserCard from 'components/UserCard';
import fakeDatabase from 'fakeDatabase';

const TeamPage = ({ match }) => {
    return (
      <div className="TeamList">
        <ul className="TeamList__members">
          {fakeDatabase.map(props => (
            <li key={props.id}>
              <NavLink to={`${match.path}/${props.id}`} className="TeamList__members__link" activeClassName="TeamList__members__link--active">{props.name}</NavLink>
            </li>
          ))}
        </ul>
        <div className="TeamList__card">
          <Switch>
            <Route path={`${match.path}/0`} render={() => <UserCard props={fakeDatabase.find(props => props.id === '0')}/>}/>
            <Route path={`${match.path}/1`} render={() => <UserCard props={fakeDatabase.find(props => props.id === '1')}/>}/>
            <Route path={`${match.path}/2`} render={() => <UserCard props={fakeDatabase.find(props => props.id === '2')}/>}/>
          </Switch>
        </div>
      </div>
  );
};

export default TeamPage;