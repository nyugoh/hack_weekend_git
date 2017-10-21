#/usr/bin/node
var express = require('express');
var http = require('http');


var port = 3000;
var app = express();
app.set('port', port||process.env.PORT);

app.get('/', function(req, res, next){
  res.send('Hello world')
});

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Server running on port %s %s', server.address().hostName, server.address().port);
});
