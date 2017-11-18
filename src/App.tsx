import RX = require('reactxp');

import SendButton = require('./SendButton');
import Input = require('./Input');
import MessageList = require('./MessageList');

const apiKey = "CC5hdB7sExxXv8vzNqoVctRItZg";
const botUrl = `https://www.cleverbot.com/getreply?key=${apiKey}`;

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
            sendMessage={this._sendMessage}
          />
          <SendButton sendMessage={this._sendMessage} />
        </RX.View>
      </RX.View>
    )
  }
  
  _sendMessage = () => {
    const userMess = this.state.textInputValue;
    

    if (!userMess.trim()) {
      return;
    }

    this.setState(prevState => ({
        textInputValue: "",
        messageList: [
          ...prevState.messageList,
          userMess
        ]
      })
    );
    
    this.getBotMessage(userMess, (botResponse) => {
      this.setState(prevState => ({
          messageList: [
            ...prevState.messageList,
            botResponse
          ]
        })
      );
    });
  }

  getBotMessage(userMessage: string, cb): void {
    fetch(`${botUrl}&input=${userMessage}`)
      .then(res => res.json())
      .then(jsonRes => cb(jsonRes.clever_output));
  }


  _handleInputChange = (newValue: string) => {
    this.setState(prevState => ({
      textInputValue: newValue
    }));
  }
}

export = App;
