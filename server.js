var express = require('express');
var app = express();
var port = 8000;


app.set('views', __dirname + '/tpl');
app.set('view engine','jade');
app.engine('jade',require('jade').__express);
app.use(express.static( __dirname + '/public'));

app.get('/', function(req,res){
    res.render("page");
    });

var io = require('socket.io').listen(app.listen(port));
console.log("[+] Listening on port " + port);

io.sockets.on('connection',function(socket){
    socket.emit('message',{message: 'Welcome!' });
    socket.on('send',function(data){
        socket.emit('message',data);
    });
});

