import RX = require('reactxp');

const _styles = {
  textInput: RX.Styles.createTextInputStyle({
      margin: 12,
      padding: 4,
      borderColor: '#999',
      borderWidth: 1,
      borderStyle: 'solid',
      height: 30,
      fontSize: 16
  })
};

interface InputState {
  value?: string
}

interface InputProps {
  onTextInputChange: (newValue: string) => void,
  textInputValue: string
}

class Input extends RX.Component<InputProps, {}> {
  render() {
    return (
      <RX.TextInput
        style={ _styles.textInput }
        value={ this.props.textInputValue }
        onChangeText={ this.props.onTextInputChange }
        autoFocus={ true }
        placeholder={ 'Enter a messageaaa' }
      />
    );
  }
}

export = Input;