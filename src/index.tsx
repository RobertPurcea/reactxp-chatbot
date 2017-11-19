import RX = require('reactxp');

import App = require('./App');

RX.App.initialize(true, true);
RX.UserInterface.setMainView(<App />);

/**
 * TODO: add some styling to the message list
 * Even cares about how things look and feel. Everyone does.
 * 
 * TODO: be consistent with the spaces near brackets. They use it too
 */