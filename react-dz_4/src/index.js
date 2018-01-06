import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import './styles.css';

ReactDOM.render(<Root />, document.querySelector('#root'));

registerServiceWorker();
