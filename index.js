var app = require('express')();
var http= require('http').Server(app);
var io = require('socket.io')(http);

http.listen(3000, function(){
  console.log('Server ready on 3000');
});

app.get('/', function(req, res){});

io.on('connection', function(socket){
  console.log('User connected');
  socket.on('chat', function(data){
    console.log(data);
    socket.broadcast.emit('new',data);
  })
});
