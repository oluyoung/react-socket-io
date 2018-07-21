let app = require('express')();
let http = require('http').Server(app);

// init with http module
// server that integrates with the nodejs server
let io = require('socket.io')(http);

// listening for incoming sockets
io.on('connection', (socket) => {
  console.log('a user connected');
  
  // listen to the chat event
  socket.on('chat message', (msg) => {
    // this broadcasts the message to all clients
    io.emit('chat message', msg);
  });

  // sockets also listen for disconnects
  socket.on('disconnect', () => {
    console.log('disconnected user');
  });
});

http.listen(3000, () => {
  console.log('freshness on port 3000');
});
