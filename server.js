var express = require('express');
var app = express();
var http = require('http').Server(app);
var router = express.Router();
var path = require('path');
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var sendgrid  = require('sendgrid')('esuc-ucla2016', 'esuc2016');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('static'));
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/', router);

router.get('/', function(req, res){
	console.log("Received Home Page Request");
	res.render('index');
})

http.listen(port, function(){
	console.log("listening on port: " + port);
});
