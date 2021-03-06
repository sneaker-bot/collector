const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const deviceSchema = new Schema({
	site : {
		type : String, 
		required : true
	},
	abck_cookie : {
		type : String,
		required : true
	}
});

const Device = mongoose.model('Uniqlo', deviceSchema); 

module.exports.Uniqlo = Device; 
