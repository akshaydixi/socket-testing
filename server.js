var io = require('socket.io').listen(8000);
io.sockets.on('connection',function(socket){
    socket.emit('news',{hello:'world'});
    socket.on('event',function(data){
        console.log(data);
        });
});
