import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import GalleryContainer from './components/GalleryContainer/GalleryContainer';
import registerServiceWorker from './registerServiceWorker';
import './styles.css';

ReactDOM.render(<App />, document.querySelector('#root'));

registerServiceWorker();
