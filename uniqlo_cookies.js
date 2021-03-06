const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const mongo_db_url = 'mongodb+srv://bach:bach30121234@devices.psqu0.mongodb.net/Akamai-API?retryWrites=true&w=majority';
mongoose.connect(mongo_db_url, { useUnifiedTopology: true, useNewUrlParser : true }).then(() => {
	console.log('Uniqlo');
}).catch((err) => {
	console.log(err);
});

const UniqloSchema = new Schema({
	store : {
		type : String,
		required : true
	},
	abck_cookie : {
		type : String,
		required : true
	}
});

const Uniqlo = mongoose.model('uniqlo', UniqloSchema); 

module.exports = Uniqlo; 
