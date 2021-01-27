import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers/index';
import reduxThunk from 'redux-thunk';

const store = createStore(
  reducers,//reducers
  {}, //estado inicial
  applyMiddleware(reduxThunk)//agregando el middleware para tareas asincronicas. 
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
