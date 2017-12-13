import React from 'react';
import Header from 'components/Header';
import Main from 'components/Main';
import './style.css';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Main />
                
            </div>
        )
    }
}