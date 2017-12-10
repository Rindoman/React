import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header/index.jsx';
import './style.css';

ReactDOM.render(<Header />, document.querySelector('#root'));

registerServiceWorker();
