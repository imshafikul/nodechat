const socket = io.connect('http://localhost:4000');

const name = document.getElementById('name'),
      message = document.getElementById('message'),
      output = document.getElementById('output'),
      send = document.getElementById('send'),
      typing = document.getElementById('typing');
      
      

// Send chat message
send.addEventListener('click', () => {
  socket.emit('chat', {
    name: name.value,
    message: message.value
  });
});


// tying message
message.addEventListener('keypress', () => {
  socket.emit('typing', name.value);
})


// receive chat message from server
socket.on('chat',(data) => {
  typing.innerHTML = '';
  output.innerHTML += '<p><strong>'+ data.name +':</strong> '+ data.message +'</p>';
});


socket.on('typing', (data) => {
  typing.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});




