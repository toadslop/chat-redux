/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel } from '../actions';

class ChannelList extends Component {
  handleClick = (event) => {
    this.props.selectChannel(event.target.id);
  }

  classes = "channel-line";

  render() {
    const { currentUser, channels, selectedChannel } = this.props;
    return (
      <div
        className="channel-list"
      >
        <div className="sidebar-section">
          <h2>Bri-chat!</h2>
        </div>
        <div className="sidebar-section">
          <p id="welcome">Hi {currentUser}</p>
        </div>
        <div className="sidebar-section channels">
          <p id="channels-heading">Channels</p>
          <div>
            {channels.map((channel) => {
              return (
                <p
                  onClick={this.handleClick}
                  id={channel}
                  key={channel}
                  className={(channel === selectedChannel ? this.classes + " active" : this.classes)}>
                  #{channel}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
