var express = require('express');
var app = express();

var fs = require('fs');
app.get('/',function(req,res){
    fs.readFile(__dirname+'/client2.html',function(err,data){
        res.send(data);
    });
});

var webRTC = require('webrtc.io').listen(app.listen(8000));

