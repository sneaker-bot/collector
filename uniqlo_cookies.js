const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const uniqloSchema = new Schema({
	data : {
		type : Object,
		required : true
	}
});

const Uniqlo = mongoose.model('Uniqlo', uniqloSchema); 

module.exports = Uniqlo; 
