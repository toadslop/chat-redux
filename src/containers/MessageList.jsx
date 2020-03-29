/* eslint-disable react/prefer-stateless-function */
// external imports
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// component imports
import Message from '../components/Message';
import MessageForm from './MessageForm';

// action handlers
import { getMessages } from '../actions';

class MessageList extends Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { selectedChannel } = this.props;
    this.props.getMessages(selectedChannel);
  }

  render() {
    const { messages } = this.props;
    return (
      <div id="message-list">
        <div id="header">
          <h3>Channel {this.props.selectedChannel}</h3>
        </div>
        <div id="messages">
          {messages.map((message) => {
            return <Message message={message} />;
          })}
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel,
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
