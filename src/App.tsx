import RX = require('reactxp');

import SendButton = require('./SendButton');
import Input = require('./Input');
import MessageList = require('./MessageList');

const _styles = {
  inputContainer: RX.Styles.createViewStyle({
      backgroundColor: 'grey',
      flexDirection: 'row',
      alignItems: 'center'
  })
};

interface AppState {
  textInputValue?: string,
  messageList?: String[]
}

class App extends RX.Component<{}, AppState> {

  state = {
    textInputValue: "",
    messageList: []
  }

  render() {
    return (
      <RX.View>
        <MessageList messages={this.state.messageList} />
        <RX.View style={ _styles.inputContainer }>
          <Input
            onTextInputChange={ this._handleInputChange }
            textInputValue={ this.state.textInputValue }
          />
          <SendButton sendMessage={this._sendMessage} />
        </RX.View>
      </RX.View>
    )
  }
  
  _sendMessage = () => {
    if (this.state.textInputValue.trim()) {
      this.setState(prevState => {
        const userMess = prevState.textInputValue;
  
        return {
          textInputValue: "",
          messageList: [...prevState.messageList, userMess, this.getBotMessage(userMess)]
        };
      })
    }
  }

  getBotMessage(userMessage: string) {
    let dictionary = {
      Hello: "I am bot haahhahaha"
    }

    return dictionary[userMessage] || "Hello"
  }


  _handleInputChange = (newValue: string) => {
    this.setState(prevState => ({
      textInputValue: newValue
    }));
  }
}

export = App;
