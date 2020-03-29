const messagesReducer = (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case 'GET_MESSAGES':
      return action.payload.messages;
    default:
      return state;
  }
};

export default messagesReducer;
