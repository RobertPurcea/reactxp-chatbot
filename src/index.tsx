import RX = require('reactxp');

import App = require('./App');

const apiKey = "CC5hdB7sExxXv8vzNqoVctRItZg";
const botUrl = `https://www.cleverbot.com/getreply?key=${apiKey}`;

RX.App.initialize(true, true);
RX.UserInterface.setMainView(<App botUrl={botUrl}/>);
