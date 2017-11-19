import RX = require('reactxp');

const _styles = {
   sendButtonStyle: RX.Styles.createButtonStyle({
      backgroundColor: "lightblue",
      margin: 10,
      padding: 6,
      borderRadius: 5,
      height: 30
   })
}

const SubmitButton = ({ handleSubmit }) => {
  return (
    <RX.Button
      onPress={(e: RX.Types.SyntheticEvent) => {
        e.stopPropagation();

        handleSubmit();
      }}
      style={ _styles.sendButtonStyle }
    >
      Send message
    </RX.Button>
  );
}

export = SubmitButton;