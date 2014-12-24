var http = require("http")
var express = require("express");
app = express();
server = http.createServer(app);
var path = require('path');
app.use(express.static(__dirname + '/client'));
server.listen(3000);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/see', function(req, res){
	res.sendFile(__dirname + '/nextIndex.html');

});


io = require('socket.io').listen(server);

io.on('connection', function(socket){
	socket.on('content', function(content){
		console.log(content);
		io.emit('content_srv', content);
	});
});	