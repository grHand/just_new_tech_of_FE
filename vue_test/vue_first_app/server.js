var express = require('express');
var path = require('path')

var app = express();
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use('/dist', express.static('dist'));
app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
});
app.get('/getlist', function(req, res){
    res.send({
        "lists" : [
            { "name" : "name222222" },
            { "name" : "name2" },
            { "name" : "name3" },
            { "name" : "name4" },
            { "name" : "name5" },
            { "name" : "name6" }
        ]
    });
});

app.listen(3000, function(){
    console.log('3000');
});