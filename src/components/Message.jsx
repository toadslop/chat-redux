/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    return (
      <div>
        <p>{this.props.message.author} - {this.props.message.created_at}</p>
        <p>{this.props.message.content}</p>
      </div>
    );
  }
}
