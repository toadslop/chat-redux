/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChannelList extends Component {
  render() {
    return (
      <div
        className="channel-list"
      >
        <h3>Bri-chat!</h3>
        <p>Hi {this.props.currentUser}</p>
        <div>
          {this.props.channels.map((channel) => {
            return (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <p
                className={(channel === this.props.selectedChannel ? "active" : "")}
                key={channel}
              >
              #{channel}
              </p>);
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, null)(ChannelList);
