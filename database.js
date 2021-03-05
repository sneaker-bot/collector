const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const deviceSchema = new Schema({
	device : {
		type : Object,
		required : true
	}
});

const Device = mongoose.model('devices', deviceSchema); 

module.exports = Device; 
