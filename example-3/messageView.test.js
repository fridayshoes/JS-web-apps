/**
 * @jest-environment jsdom
 */

const fs = require('fs'); //provides functionality to access interact with filesystem
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button and displays the message', () => {
    // Arrange
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    // Act
    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector("#message-input");

    inputEl.value = 'Hey buddy!'

    buttonEl.click();

    // Assert
    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual('Hey buddy!');
  });

  it('hides the message', () => {
    // Arrange
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    // Act - Show, then hide message
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();

    // Assert
    expect(document.querySelector('#message')).toBeNull();
  });
});