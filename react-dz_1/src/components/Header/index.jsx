import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (<header className="Header">
                <h1 className="Header__logo">movie mate</h1>
                <ul className="Navigation">
                    <li className="Navigation__item">
                        <a href="" className="Navigation__link">login</a>
                    </li>
                    <li className="Navigation__item">
                        <a href="" className="Navigation__link">browse</a>
                    </li>
                    <li className="Navigation__item">
                        <a href="" className="Navigation__link">about</a>
                    </li>
                </ul>
            </header>);
    }
}
