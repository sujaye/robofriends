import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import 'tachyons';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';

const logger = createLogger();

const rootReducers = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducers, applyMiddleware(ThunkMiddleware, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
