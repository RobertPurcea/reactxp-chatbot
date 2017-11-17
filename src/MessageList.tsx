import RX = require('reactxp');

const _styles = {
   userMessage: RX.Styles.createTextStyle({

   }),
   botMessage: RX.Styles.createTextStyle({
      
   })
}

const MessageList = ({ messages }) => {
  return (
    <RX.View>
      {
         messages.map((message, id) => {
            const style = message.owner === 'bot'
               ? _styles.botMessage
               : _styles.userMessage;
            return <RX.Text key={ id } style={ style }>{ message }</RX.Text>
         })
      }
    </RX.View>
  );
}

export = MessageList;