const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const kohlSchema = new Schema({
	abck_cookie : {
		type : String,
		required : true
	}
});

const Kohl = mongoose.model('kohl', kohlSchema); 

module.exports = Kohl; 
