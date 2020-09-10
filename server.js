var express = require('express');
var app = express();
var http = require('http').Server(app);
var router = express.Router();
var path = require('path');
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var sg = require('sendgrid')(process.env.SENDGRID_APIKEY);
var helper = require('sendgrid').mail;
const formidable = require('formidable');
const util = require('util');



/* disable firebase & cloudinary

var firebase = require("firebase");
var cloudinary = require('cloudinary');

cloudinary.config({ 
	cloud_name: process.env.CLOUDINARY_CLOUDNAME, 		 
	api_key: process.env.CLOUDINARY_APIKEY, 		
	api_secret: process.env.CLOUDINARY_APISECRET		
});

var config = {
	apiKey: process.env.FIREBASE_APIKEY,
	authDomain: process.env.FIREBASE_AUTHDOMAIN,
	databaseURL: process.env.FIREBASE_DATABASEURL,
	storageBucket: process.env.FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID
};

firebase.initializeApp(config);

var eventsDatabase = firebase.database().ref().child('events'); 

*/

var orgs = require('./orgs.json');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/', router);

router.get('/', function(req, res){
	console.log("Received Home Page Request");
	res.render('index', {header_background: 'transparent'});
});

router.get('/engineering_calendar/', function(req, res){
	console.log("Received Engineering Calendars Request");
	res.locals.orgs = orgs;
	res.render('engineering_calendar');
});

router.get('/lounge_calendar/', function(req, res){
	console.log("Received Lounge Calendars Request");
	res.render('lounge_calendar');
});

router.get('/add_event/', function(req, res){
	console.log("Received Add Events Request");
	res.render('add_event');
});


// DEBUG
// router.get('/checkbox/', function(req, res){
// 	console.log("Received checkbox");
// 	res.locals.orgs = orgs;
// 	res.render('checkbox_test');
// });


/*
router.post('/upload_event', function(req, res){
	var form = new formidable.IncomingForm();
	var fields, file;
	console.log("Got form")
	form.parse(req, function(err, _fields, _file) {
		console.log("Parsed form");
		fields = _fields;
		file = _file.flier;
		fields.dateInMS = Date.parse(_fields.date);
		res.render('add_event');
		res.end();
	});

	form.on('end', function(){
		//console.log(file);
		console.log("form end");
		if (file.size == 0){
			
			console.log("no flier");
			fields['flierAdded'] = false;
			addEventToFirebase(fields, function(data){
				sendEmail(data);
			});
			
		}
		else {
			fields['flierAdded'] = true;
			
			
			cloudinary.uploader.upload(file.path, function(result){
				fields['cloudinaryName'] = result.public_id;
				fields['cloudinaryURL'] = result.url;
				addEventToFirebase(fields, function(data){
					sendEmail(data);
				});
			}, {
				width: 700,
				height: 700,
				crop: 'fit',
				format: 'png'
			}); 
		}
	})
}) */


http.listen(port, function(){
	console.log("listening on port: " + port);
});






/*
function addEventToFirebase(eventFields, cb){
	if (eventFields.flierAdded == false){
		console.log("Pushing data to firebase");
		var firebaseObject = eventsDatabase.push({
			eventName: eventFields.event_name,
			eventDate: eventFields.date,
			eventTime: eventFields.time,
			eventTimeMs: eventFields.dateInMS,
			organizationName: eventFields.org,
			location: eventFields.location,
			organizationEmail: eventFields.email,
			moderated: false,
			flierAdded: false
		})
		var urlLink  = firebaseObject.toString();
		console.log(urlLink);
		cb(urlLink);
	} 
	else {
		console.log("Pushing data to firebase");
		var firebaseObject = eventsDatabase.push({
			eventName: eventFields.event_name,
			eventDate: eventFields.date,
			eventTime: eventFields.time,
			eventTimeMs: eventFields.dateInMS,
			organizationName: eventFields.org,
			location: eventFields.location,
			organizationEmail: eventFields.email,
			moderated: false,
			flierAdded: true,
			cloudinaryName: eventFields.cloudinaryName,
			cloudinaryURL: eventFields.cloudinaryURL
		})
		var urlLink = firebaseObject.toString();
		console.log(urlLink);
		cb(urlLink);
	}
}

function sendEmail(firebaseURL){
	var from_email = new helper.Email('website@esuc.ucla.com');
 	var to_email = new helper.Email('esuc.ucla.webmaster@gmail.com');
 	var content = new helper.Content('text/plain', 'New event added at ' + firebaseURL);
 	var subject = 'New Event Added for Display Board';
 	var mail = new helper.Mail(from_email, subject, to_email, content);

 	var request = sg.emptyRequest({
 		method: 'POST',
 		path: '/v3/mail/send',
 		body: mail.toJSON(),
 	});
 	sg.API(request, function(error, response) {
 		console.log(response.statusCode);
 		console.log(response.body);
 		console.log(response.headers);
 		if (!error){
 			console.log("Email sent");
 		}
 		else {
 			console.log(error);
 		}
 	});
}

*/
