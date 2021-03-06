const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const uniqloSchema = new Schema({
	abck_cookie : {
		type : String,
		required : true
	}
});

const Uniqlo = mongoose.model('Uniqlo', uniqloSchema); 

module.exports = Uniqlo; 
