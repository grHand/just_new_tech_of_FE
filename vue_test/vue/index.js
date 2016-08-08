var express = require('express');
//var vue = require('vue');
var app = express();

//app.use(express.static('public'));

app.get('/', function(req, res  ){
    res.send('Hello World!');
});



var server = app.listen (3000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('一个express的实例，监听http://%s:%s', host, port);
});