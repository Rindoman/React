import React from 'react';
import './Header.css';
import Main from '../Main/index.jsx';

export default class Header extends React.Component {
    render() {
        return (<div className="container">
            <header className="Header">
                <h1 className="Header__logo">movie mate</h1>
                <ul className="Navigation">
                    <li className="Navigation__item">
                        <a href="#" className="Navigation__link">login</a>
                    </li>
                    <li className="Navigation__item">
                        <a href="#" className="Navigation__link">browse</a>
                    </li>
                    <li className="Navigation__item">
                        <a href="#" className="Navigation__link">about</a>
                    </li>
                </ul>
            </header>
            <Main />
        </div>);
    }
}
