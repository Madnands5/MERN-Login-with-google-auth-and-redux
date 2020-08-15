import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import allreducer from "./redux/reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router, Route , Switch,Link} from "react-router-dom";
import App from './App';
import Register from './components/auth/Register';
const middleware = [thunk];
const store=createStore(allreducer,composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

