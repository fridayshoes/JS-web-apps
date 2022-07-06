class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.hideButtonEl.addEventListener('click', () => {
       this.hideMessage();
    });
  }

  displayMessage() {
    const messageElement = document.createElement("div");
    messageElement.setAttribute("id", "message");
    messageElement.innerText = 'This message displayed by JavaScript';
    document.querySelector('#main-container').append(messageElement);
    console.log('Thanks for clicking me!');
  }

  hideMessage() {
    document.querySelector("#message").remove();
  }
}

module.exports = MessageView;