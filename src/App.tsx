import RX = require('reactxp');

import SubmitButton = require('./SubmitButton');
import Input = require('./Input');
import MessageList = require('./MessageList');

const _styles = {
  inputView: RX.Styles.createViewStyle({
      backgroundColor: 'green',
      flexDirection: 'row',
      alignItems: 'center'
  }),
  appContainer: RX.Styles.createViewStyle({
    justifyContent: 'center',
    margin: 0
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
      <RX.View >
        <MessageList messages={ this.state.messageList }/>
        <RX.View style={ _styles.inputView }>
          <Input
            onInputChange={ this._handleInputChange }
            inputText={ this.state.inputText }
            handleSubmit={ this._handleSubmit }
          />
          <SubmitButton handleSubmit={ this._handleSubmit } />
        </RX.View>
      </RX.View>
    )
  }

  // on input submit, send user message and get the bot message
  private _handleSubmit = () : void => {
    const userMessage = this.state.inputText;

    if (!userMessage.trim()) {
      return;
    }

    this._sendUserMessage(userMessage);
    this._sendBotMessage(userMessage);
  }
  /**
   * Send the user/bot message to the message history
   * The bot message is async and is mapped 1 on 1 to user messages
   */
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
  
  // input is controlled by App
  private _handleInputChange = (newValue: string) => {
    this.setState(prevState => ({
      inputText: newValue
    }));
  }
}

export = App;
