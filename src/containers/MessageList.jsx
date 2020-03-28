import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MessageList extends Component {
  render() {
    return (
      <div>
        <h3>Channel</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel,
    messages: state.messages
  };
}

export default connect(mapStateToProps, null)(MessageList);
