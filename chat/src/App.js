import React, { Component } from 'react';
import io from 'socket.io-client';
import Register from './components/Register/Register.js';
import Messages from './components/Messages/Messages.js';
import Form from './components/Form/Form.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.socket = io('http://localhost:3000');
    this.state = {
      message: '',
      user: 'Anon',
      messages: [] 
    };
    this.setUser = this.setUser.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.sendChat = this.sendChat.bind(this);
  }

  setUser(event){
    event.preventDefault();
    this.setState({user: event.target.value});
  }

  setMessage(event){
    this.setState({message: event.target.value});
  }
  
  sendChat(event){
    event.preventDefault();
    let input_message = this.state.message;
    
    if(input_message === '' ) console.log('Can\'t submit nothing');
    else {
      console.log(this.state.user);

      // generate timestamp for order
      let timestamp = (new Date()).getTime();
      // generate key to use as id
      let key = this.state.user + timestamp;
      // get new message with user
      let new_message = {key:key ,user: this.state.user, message: input_message, time: timestamp};
      // console.log(new_message);

      // send message with title 'chat message' to socket
      this.socket.emit('chat message', new_message);

      // do something when this event is performed
      /* This is the problem area

      this.socket.on('chat message', (msg) => {
        console.log(msg);
        // reset the input value
        this.setState({message: ''});

        // push to this.state's message array
        this.state.messages.push(new_message);
        // update the messages state array
        this.setState({messages: this.state.messages});
        console.log(this.state.messages);
      });*/
    }
  }

  render() {
    return (
      <div className="App">
        <Register setuser={this.setUser} user={this.state.user}/>
        <Messages messages={this.state.messages} />
        <Form send={this.sendChat} getmsg={this.setMessage} value={this.state.message}/>
      </div>
    );
  }
}

export default App;
