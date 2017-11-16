import RX = require('reactxp');
import My = require('./My');

RX.App.initialize(true, true);
RX.UserInterface.setMainView(<My sendMessage={function() {console.log("hello")}}/>);

// DO THE APP WHILE YOU LEARN, YOU KNOW ALREADY ENOUGH TO FINISH IT