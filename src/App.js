import React, { Component } from 'react';
import Createmessege from './components/createmessege';
import Messeges from './components/messeges';
import socketIOClient from 'socket.io-client';

var socket = null;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      messeges: [{
        user: '',
        content: '',
      },{
        user: '',
        content: '',
      }] 
    };
    if (socket === null) {
      socket = socketIOClient('http://localhost:5001');
    }
    socket.on('setuser' , (username)  => {
      this.setState({
        username: username,
      });
      socket.emit('setuser');
    })

    socket.on('send' , (messege) => {
      this.setState({
            messeges: [...this.state.messeges , messege]
          })
    })
  };
  createmessege = (messege) => {
    messege.user = this.state.username;
    socket.emit('send' , messege);
  }
  render() {
    return (
      <div>
        <Messeges messeges={this.state.messeges}></Messeges>
        <Createmessege createmessege={this.createmessege}></Createmessege>
      </div>
    );
  }
}

export default App;