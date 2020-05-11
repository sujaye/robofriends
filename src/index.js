import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
