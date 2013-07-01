window.onload = function(){
    var messages = [];
    var socket = io.connect('http://localhost:8000');
    var field = document.getElementById('field');
    var sendButton = document.getElementById('send');
    var content = document.getElementById('content');
    var name = document.getElementById('name');
    socket.on('message',function(data){
        if(data.message){
            messages.push(data);
            console.log(messages);
            var html = '';
            for(var i=0; i<messages.length; i++){
            if(messages[i].username)
                html+='<b>' + messages[i].username + '</b>: ' + messages[i].message + '<br />';
            else html+=messages[i].message + '<br />';    
                }
            content.innerHTML = html;
        }
        else{
            console.log('[-] There is a problem : ',data);
        }
    });

    sendButton.onclick = function(){
        var text = field.value;
        socket.emit('send', {message:text , username:name.value});
    };
}
