const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const pacsunSchema = new Schema({
	abck_cookie : {
		type : String,
		required : true
	}
});

const Pacsun = mongoose.model('Pacsun', pacsunSchema); 

module.exports = Pacsun; 
