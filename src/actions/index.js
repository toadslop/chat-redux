/* eslint-disable import/prefer-default-export */
export function getMessages(selectedChannel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${selectedChannel}/messages`)
    .then(response => response.json());
  return {
    type: 'GET_MESSAGES',
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  // TODO
  console.log(channel);
  console.log(author);
  console.log(content);
}

export function updateInputValue(inputValue) {
  return {
    type: 'UPDATE_INPUT_VALUE',
    payload: inputValue
  }
}
