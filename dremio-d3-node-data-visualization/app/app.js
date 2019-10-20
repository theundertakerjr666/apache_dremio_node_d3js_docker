var dremio_odbc_driver = 'DRIVER LOCATION';
var dremio_host = 'localhost';
var dremio_port = 31010;
var dremio_user = 'DREMIO USERNAME';
var dremio_password = 'DREMIO PASSWORD';
var server_port = 8080;

var path = require('path');

var db = require('odbc')();
var cn = 'Driver=' + dremio_odbc_driver + 
    ';ConnectionType=Direct;HOST=' + dremio_host + 
    ';PORT=' + dremio_port + 
    ';AuthenticationType=Plain;UID=' + dremio_user + 
    ';PWD=' + dremio_password;

var express = require('express');
var app = express();
var server = require('http').Server(app);

app.set('view engine', 'ejs');

var dremioData;

db.open(cn, function (err) {
    if (err) {
    	return console.log(err);
    } else {
    	db.query('SELECT * from "dremio_tutorial".search_interest', [42], function (err, data) {
    	    if (err) {
    	        console.log(err)
    	    } else {
                dremioData = data;
    	    	console.log(data);
    	    }
    	});
    }
});

app.get('/', function(req, res) {
    res.render('index', {
        dremioData: dremioData
    });
});

server.listen(server_port, function () {
    console.log('Listening on port: ' + server_port);
});