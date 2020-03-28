// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Logger with default options
import logger from 'redux-logger';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messagesReducer from './reducers/messagesReducer';
import channelsReducer from './reducers/channelsReducer';
import selectedChannelReducer from './reducers/selectedChannelReducer';
import currentUserReducer from './reducers/currentUserReducer';

// State and reducers
const initialState = {
  messages: [
    {
      message: "Hello",
      user: "Mike"
    },
    {
      message: "I'm an Indonesian.",
      user: "Ryanda"
    }
  ],
  channels: ["#general", "#react", "#paris"],
  selectedChannel: "#general",
  // eslint-disable-next-line no-alert
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: currentUserReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, applyMiddleware(logger))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
