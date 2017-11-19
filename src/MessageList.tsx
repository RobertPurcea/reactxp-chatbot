import RX = require('reactxp');

const _styles = {
  containerStyle: RX.Styles.createViewStyle({
    backgroundColor: 'darkgreen'
  }),
  userMessage: RX.Styles.createTextStyle({
    color: 'lightblue',
    alignSelf: 'flex-end'
  }),
  botMessage: RX.Styles.createTextStyle({
    color: 'white'      
  })
}

const MessageList = ({ messages }) => (
  <RX.View style={ _styles.containerStyle }>
    {
      messages.map((message, id) => {
        const style = id % 2 ? _styles.botMessage : _styles.userMessage;

        /**
         * the order of items does not change so we can
         * safely use ids from map as keys
         */
        return (
          <RX.Text
            key={ id }
            style={ style }
          >
            { message }
          </RX.Text>
        );
      })
    }
  </RX.View>
);


export = MessageList;