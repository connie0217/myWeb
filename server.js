var express = require('express');
var app = express();

app.get('/index', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
 })
 var server= app.listen(8082,() => {
    var port = server.address().port;
    var host = server.address().address;
    console.log('host', host)
    console.log("应用实例，访问地址为 http://", host, port)
 })