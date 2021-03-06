const express = require('express'); 
const path = require('path');
const app = express(); 
const fs = require('fs');
const mongoose = require('mongoose');
const Device = require('./database.js');
const Uniqlo = require('./uniqlo_cookies.js');
const bodyParser = require('body-parser'); 
const { promisify } = require('util');
const sleep = promisify(setTimeout);

const port = process.env.PORT || 3000;
const mongo_db_url = 'mongodb+srv://bach:bach30121234@devices.psqu0.mongodb.net/Akamai-Devices?retryWrites=true&w=majority';
mongoose.connect(mongo_db_url, { useUnifiedTopology: true, useNewUrlParser : true }).then(() => {
	console.log('Connected to database');
	app.listen(port);
}).catch((err) => {
	console.log(err);
});

app.use(bodyParser.json());

app.get('/', function (req, res) {
 //res.send('backendaio collector'); 
 res.sendFile(path.join(__dirname + '/collector.html'));
});

app.post('/cookie_api', function(req, res){
	//res.sendFile(path.join(__dirname + '/collector.html'));
	res.send(200);
	var data = req.body;
	var site = data['site'].toString();
	var cookie = data['cookie'].toString();

	if(site == 'Uniqlo'){

		const uniqlo = new Uniqlo({
			abck_cookie : cookie
		});
		uniqlo.save();
	};
});

app.get('/uniqlo/cookie_api', function(req, res){
	//res.sendFile(path.join(__dirname + '/collector.html'));
	Uniqlo.find.sort({ createdAt: 1 }, (error,data) => {
		if(error){
			res.send('no cookies');
		}else{
			res.send(data);
		};
	})
});
//app.get('/collectorscript.js',function(req,res){
//   res.sendFile(path.join(__dirname + '/collectorscript.js')); 
//});

//app.post('/device_api', function(req, res){
//	var device_data = req.body; 

//	const device = new Device({
//		device : device_data
//	});

//	device.save();
//});
