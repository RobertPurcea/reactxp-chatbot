// import RX = require('reactxp');


// interface MyState {
//   text: string,
//   disabled: boolean
// }

// interface MyProps {
//   sendMessage: () => void
// }

// class My extends RX.Component<MyProps, MyState> {
//   state = {
//     text: "",
//     disabled: false
//   };

//   handlePress = (e: RX.Types.SyntheticEvent) => {
//     e.stopPropagation();

//     // announce the input wrapper the button was clicked
//     this.props.sendMessage();
//   }

//   render() {
//     return <RX.Button onPress={this.handlePress}>Send message</RX.Button>
//   }
// }

// export = My;