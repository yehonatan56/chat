const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const port = 5001;
const app = express();

const server = http.createServer(app);

const io = socketio(server);

let usercount = 1;

io.on('connection', socket => {
    usercount++;

    const username = 'user' + usercount;

    socket.emit('setuser' , username);
    io.sockets.emit('createmessge' , {
        content: `${username} connected`
    });

    socket.on('send' , (message) => {
        io.sockets.emit('send' , message)
    });
    socket.on('disconnected' , () => {
     io.socket.emit('createmesgge' , {
        content: `${username} disconnected`
     })
    })

})

server.listen(port , () => console.log('work'));