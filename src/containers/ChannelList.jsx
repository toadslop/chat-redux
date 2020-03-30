/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ChannelList extends Component {
  classes = "channel-line";

  render() {
    const { currentUser, channels, channelFromParams } = this.props;
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
                  id={channel}
                  key={channel}
                  className={(channel === channelFromParams ? `${this.classes} active` : this.classes)}
                >
                  <Link to={`/${channel}`}>
                    #{channel}
                  </Link>
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
    { },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
