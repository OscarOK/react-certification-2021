import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.scss';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
