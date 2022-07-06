class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  }

  displayMessage() {
    const messageElement = document.createElement("div");
    messageElement.setAttribute("id", "message");
    messageElement.innerText = 'This message displayed by JavaScript';
    document.querySelector('#main-container').append(messageElement);
    // this.buttonEl.append(newDiv);
    console.log('Thanks for clicking me!');
  }
}

module.exports = MessageView;