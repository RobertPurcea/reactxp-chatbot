// import RX = require('reactxp');

// import SendButton = require('./SendButton');
// import Input = require('./Input');
// import MessageList = require('./MessageList');

// interface S {
//   textInputValue?: string,
//   messageList?: string[]
// }

// class App extends RX.Component<{}, S> {

//   // FIXME: TypeScript will throw an error if I don't enter a strng in the messageList array
//   state = {
//     textInputValue: "",
//     messageList: [""]
//   }

//   render() {
//     return (
//       <RX.View>
//         <SendButton sendMessage={this._sendMessage} />
//         <Input
//           onTextInputChange={ this._handleInputChange }
//           textInputValue={this.state.textInputValue}
//         />
//         <MessageList messages={this.state.messageList} />
//       </RX.View>
//     )
//   }
  
//   _sendMessage = () => {
//     this.setState(prevState => {
//       const userMess = prevState.textInputValue;

//       return {
//         textInputValue: "",
//         messageList: [...prevState.messageList, userMess, this.getBotMessage(userMess)]
//       };
//     })
//   }

//   getBotMessage(userMessage: string) {
//     let dictionary = {
//       Hello: "I am bot haahhahaha"
//     }

//     return dictionary[userMessage] || "Hello"
//   }


//   _handleInputChange = (newValue: string) => {
//     this.setState(prevState => ({
//       textInputValue: newValue
//     }));
//   }
// }

// export = App;

import RX = require('reactxp');

class App extends RX.Component<{}, {}> {
  render() {
    return <RX.Button>ccxt</RX.Button>
  }
}

export = App;
