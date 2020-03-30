/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage, updateInputValue, clearInput } from '../actions';

class MessageForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const { selectedChannel, currentUser, inputValue } = this.props;
    this.props.createMessage(selectedChannel, currentUser, inputValue);
    this.props.clearInput();
  }

  handleChange = (event) => {
    this.props.updateInputValue(event.target.value);
  }

  componentDidMount() {
    this.focus.current.focus();
  }

  focus = React.createRef();

  render() {
    const { inputValue } = this.props;
    return (
      <form id="message-input" onSubmit={this.handleSubmit}>
        <input ref={this.focus} id="input" type="text" value={inputValue} onChange={this.handleChange} />
        <button id="submit" type="submit">Send</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage, updateInputValue, clearInput },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    inputValue: state.inputValue,
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
