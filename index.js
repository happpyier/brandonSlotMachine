var express = require('express'); 
var app = express();
var cookieParser = require('cookie-parser');
var pg = require('pg');
const https = require('https');
const fs = require('fs');
var path = require("path");
var url = require("url");
app.get([''], function(request, response) {
		fs.readFile('index.html', 'utf8', function (err,data) {
			if (err) 
			{
				return console.log(err);
			}
			response.write(data);
		});
	}
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port')); 
});