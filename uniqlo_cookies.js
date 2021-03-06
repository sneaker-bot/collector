const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const mongo_db_url = 'mongodb+srv://bach:bach30121234@devices.psqu0.mongodb.net/Akamai-API?retryWrites=true&w=majority';
mongoose.connect(mongo_db_url, { useUnifiedTopology: true, useNewUrlParser : true }).then(() => {
	console.log('Uniqlo');
}).catch((err) => {
	console.log(err);
});

const deviceSchema = new Schema({
	store : {
		type : String,
		required : false
	},
	abck_cookie : {
		type : String,
		required : false
	}
});

const Uniqlo = mongoose.model('uniqlo', deviceSchema); 

module.exports = Uniqlo; 
