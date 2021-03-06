const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const mongo_db_url = 'mongodb+srv://bach:bach30121234@devices.psqu0.mongodb.net/Akamai-Devices?retryWrites=true&w=majority';
mongoose.connect(mongo_db_url, { useUnifiedTopology: true, useNewUrlParser : true }).then(() => {
	console.log('Devices');
}).catch((err) => {
	console.log(err);
});

const deviceSchema = new Schema({
	device : {
		type : Object,
		required : true
	}
});

const Device = mongoose.model('devices', deviceSchema); 

module.exports = Device; 
