const express = require('express');
const socket = require('socket.io');

const app = express();

const server = app.listen(4000, () => {
  console.log("App is running on port 4000");
});


// Static file
app.use(express.static('public'));

// Socket Setup
const io = socket(server);

io.on('connection', (socket) => {
  console.log("Made connection socket", socket.id);

  socket.on('chat', function(data){
    io.sockets.emit('chat', data);
  })

  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data);
  })


});