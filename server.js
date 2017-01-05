var express = require('express');
var app = express();
var http = require('http').Server(app);
var router = express.Router();
var path = require('path');
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var sendgrid  = require('sendgrid')('esuc-ucla2016', 'esuc2016');
const formidable = require('formidable');
const util = require('util');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/', router);

router.get('/', function(req, res){
	console.log("Received Home Page Request");
	res.render('index', {nav_wrapper_id: 'decreaseOpacity'});
});

router.get('/engineering_calendar/', function(req, res){
	console.log("Received Engineering Calendars Request");
	res.render('engineering_calendar', {nav_wrapper_id: 'increaseOpacity'});
});

router.get('/lounge_calendar/', function(req, res){
	console.log("Received Lounge Calendars Request");
	res.render('lounge_calendar', {nav_wrapper_id: 'increaseOpacity'});
});

router.get('/add_event/', function(req, res){
	console.log("Received Add Events Request");
	res.render('add_event', {nav_wrapper_id: 'increaseOpacity'});
});

router.post('/upload_event', function(req, res){
	var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
})


http.listen(port, function(){
	console.log("listening on port: " + port);
});
