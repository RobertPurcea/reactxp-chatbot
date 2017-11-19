import RX = require('reactxp');

const _styles = {
  textInput: RX.Styles.createTextInputStyle({
      margin: 12,
      padding: 4,
      borderColor: '#999',
      borderWidth: 1,
      borderStyle: 'solid',
      height: 30,
      fontSize: 16,
      borderRadius: 5
  })
};

const Input = ({ onInputChange, inputText, handleSubmit }) => (
    <RX.TextInput
      style={ _styles.textInput }
      value={ inputText }
      onChangeText={ onInputChange }
      autoFocus={ true }
      placeholder={ 'Enter a message' }
      onSubmitEditing={ handleSubmit }
    />
);

export = Input;
