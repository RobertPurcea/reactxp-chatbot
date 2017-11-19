import RX = require('reactxp');

import App = require('./App');

const apiKey = "CC5hdB7sExxXv8vzNqoVctRItZg";
const botUrl = `https://www.cleverbot.com/getreply?key=${apiKey}`;

RX.App.initialize(true, true);
RX.UserInterface.setMainView(<App botUrl={botUrl}/>);

/**
 * TODO: add some styling to the message list
 * Even cares about how things look and feel. Everyone does.
 * 
 * TODO: be consistent with the spaces near brackets. They use it too
 * 
 * TODO: make input ScrollView
 */