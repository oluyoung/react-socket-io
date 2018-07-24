import React, { Component } from 'react';
import io from 'socket.io-client';
import Register from '../components/Register/Register.js';
import Messages from '../components/Messages/Messages.js';
import Form from '../components/Form/Form.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    // Initializes the socket connection to the Node server
    this.socket = io('http://localhost:3000');

    // Initialize states
    this.state = {
      message: '', // handles any new messageeese
      user: 'Anon', // Default username
      messages: [] // Stores all the messages of the user
    };

    // this handles the username registration
    this.username = React.createRef();

    // Bind functions to this class
    this.setUser = this.setUser.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.sendChat = this.sendChat.bind(this);

    // This handles any new event on the socket
    // Any new event put up
    // Included in the constructor because the constructor method is only run once
    // in the react lifecycle
    this.socket.on('chat message', (msg) => {
      console.log(msg);
      // reset the input value
      this.setState({message: ''});

      // push to this.state's message array
      this.state.messages.push(msg);
      // update the messages state array
      this.setState({messages: this.state.messages});
      console.log(this.state.messages);
    });
  }

  /**
  Function to store the user within the state
  **/
  setUser(event){
    event.preventDefault();
    // this gets the input value passed as a reference
    let username = this.username.current.value;
    // Only set the user state if input is passed
    if(username !== '') this.setState({user: username});
  }

  /**
  Function to store the message within the state
  **/
  setMessage(event){
    // stores the new message's state
    this.setState({message: event.target.value});
  }
  
  /**
  Function to handle the Message Sending to the socket
  **/
  sendChat(event){
    event.preventDefault();

    let input_message = this.state.message;
    
    if(input_message === '' ) console.log('Can\'t submit nothing');
    else {
      // generate timestamp for chat message
      let timestamp = (new Date()).getTime();
      
      // generate key to use as id
      let key = this.state.user + timestamp;
      
      // get new message with user
      let new_message = {key:key ,user: this.state.user, message: input_message, time: timestamp};

      // send message with title 'chat message' to socket
      this.socket.emit('chat message', new_message);
    }
  }

  render() {
    return (
      <div className="App">
        <Register setuser={this.setUser} inputref={this.username}/>
        <Messages messages={this.state.messages} />
        <Form send={this.sendChat} getmsg={this.setMessage} value={this.state.message}/>
      </div>
    );
  }
}

export default App;
