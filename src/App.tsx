import RX = require('reactxp');

import SendButton = require('./SendButton');
import Input = require('./Input');
import MessageList = require('./MessageList');

const apiKey = "CC5hdB7sExxXv8vzNqoVctRItZg";
const botUrl = `https://www.cleverbot.com/getreply?key=${apiKey}`;

const _styles = {
  inputView: RX.Styles.createViewStyle({
      backgroundColor: 'grey',
      flexDirection: 'row',
      alignItems: 'center'
  })
};

interface AppState {
  inputText?: string,
  messageList?: String[]
}

class App extends RX.Component<{}, AppState> {
  state = {
    inputText: "",
    messageList: []
  }

  render() {
    return (
      <RX.View>
        <MessageList messages={ this.state.messageList } />
        <RX.View style={ _styles.inputView }>
          <Input
            onInputChange={ this._handleInputChange }
            inputText={ this.state.inputText }
            handleSubmit={ this._handleSubmit }
          />
          <SendButton handleSubmit={ this._handleSubmit } />
        </RX.View>
      </RX.View>
    )
  }

  // sends the current message of the user to the message list
  // gets and puts the message of the bot to the message list
  _handleSubmit = () : void => {
    const userMessage = this.state.inputText;

    if (!userMessage.trim()) {
      return;
    }
    
    this._sendUserMessage(userMessage);
    this._getBotMessage(userMessage);
  }

  // FIXME: the naming of the functions is odd. They actually modify the state, not just get/send something
  _sendUserMessage = (userMessage: string): void => {    
    this.setState(prevState => ({
        inputText: "",
        messageList: [
          ...prevState.messageList,
          userMessage
        ]
      })
    );
  }
  _getBotMessage(userMessage: string): void {
    fetch(`${botUrl}&input=${userMessage}`)
      .then(res => res.json())
      .then(json => {
        this.setState(prevState => ({
          messageList: [
            ...prevState.messageList,
            json.clever_output
          ]
        }));
      });
  }
  
  // update the state every time input changes
  _handleInputChange = (newValue: string) => {
    this.setState(prevState => ({
      inputText: newValue
    }));
  }
}

export = App;

/**
 * button pressed => sendAndReceiveMessages() => send_user_message(); get_bot_message();
 */