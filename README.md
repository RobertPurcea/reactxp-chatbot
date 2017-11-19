## Done chat-bot

  1. API key usage

    Normally, I would hide the API key but you said 'no backend'.
    Thus, I must be able to somehow hide the key on the client side.
    That's not possible as any request you send on the client is on the dev. tools network tab, along with information about it, including the URL and thus, your API key.

    Possible solution: Do the request in the backend, and create an endpoint for it.

  2. 

  

## Chat-bot

3 comps:
  Input to enter message
  Button to send message
  List of existing messages

App's state:
  inputTextValue,
  listOfMessages

On button click => Update the list of messages

TODO: functionality for reading multiple messages?
# RXPHelloWorld

This app works on React Native (iOS, Android) and web. Most of the app's code is contained in `App.tsx`.

The commands in the instructions below assume you are in the root of this repo.
