import RX = require('reactxp');

import SubmitButton = require('./SubmitButton');
import Input = require('./Input');
import MessageList = require('./MessageList');

const _styles = {
  inputView: RX.Styles.createViewStyle({
      backgroundColor: 'green',
      flexDirection: 'row',
      alignItems: 'center'
  })
};

interface AppState {
  inputText?: string,
  messageList?: String[]
}

interface AppProps {
  botUrl: string
}

class App extends RX.Component<AppProps, AppState> {
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
          <SubmitButton handleSubmit={ this._handleSubmit } />
        </RX.View>
      </RX.View>
    );
  }

  /**
   * if userMessage is not empty, send it to message history
   * then, get the bot message and send it to message history as well
   */
  private _handleSubmit = () : void => {
    const userMessage = this.state.inputText;

    if (!userMessage.trim()) return;

    this._sendUserMessage(userMessage);
    this._sendBotMessage(userMessage);
  }

  // send user message to message history and reset input
  private _sendUserMessage = (userMessage: string): void => {
    this.setState(prevState => ({
        inputText: "",
        messageList: [
          ...prevState.messageList,
          userMessage
        ]
      })
    );
  }

  // compute the bot message and send it asynchronously to message history
  private _sendBotMessage(userMessage: string): void {
    fetch(`${this.props.botUrl}&input=${userMessage}`)
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

  /**
   * modify state according to input change event
   * input is a controlled component, it's value comes from App state
   */
  private _handleInputChange = (newValue: string) => {
    this.setState(prevState => ({
      inputText: newValue
    }));
  }
}

export = App;
