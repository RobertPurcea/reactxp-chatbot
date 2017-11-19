import RX = require('reactxp');

const _styles = {
   sendButtonStyle: RX.Styles.createButtonStyle({
      backgroundColor: "red",
      margin: 10,
      padding: 6
   })
}

interface MyState {
  text: string,
  disabled: boolean
}

interface MyProps {
  handleSubmit: () => void
}

class My extends RX.Component<MyProps, MyState> {
  state = {
    text: "",
    disabled: false
  };

  handlePress = (e: RX.Types.SyntheticEvent) => {
    e.stopPropagation();

    // announce the input wrapper the button was clicked
    this.props.handleSubmit();
  }

  

  render() {
    return (
      <RX.Button
         onPress={ this.handlePress }
         style={ _styles.sendButtonStyle }
      >
         Send message
      </RX.Button>
    );
  }
}

export = My;