const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storeSchema = new Schema({
	firstName:String,
	lastName:String,
	city:String,
	contactnumber:String,
	country:String,
	doornumber:String,
	email:String,
	password:String,
	pincode:String,
	services:String,
	state:String,
	street:String

});

module.exports = mongoose.model('store',storeSchema,'allstoresdata');