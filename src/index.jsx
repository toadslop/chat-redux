// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import { BrowerserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messagesReducer from './reducers/messagesReducer';
import channelsReducer from './reducers/channelsReducer';
import selectedChannelReducer from './reducers/selectedChannelReducer';
import currentUserReducer from './reducers/currentUserReducer';
import inputValueReducer from './reducers/inputValueReducer';

// State and reducers
const initialState = {
  messages: [],
  channels: ["general", "react", "paris"],
  selectedChannel: "general",
  // eslint-disable-next-line no-alert
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  inputValue: ""
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: currentUserReducer,
  inputValue: inputValueReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, applyMiddleware(logger, promiseMiddleware))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
