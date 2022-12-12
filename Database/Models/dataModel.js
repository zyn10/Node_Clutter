const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dataSchema =new Schema({
	name:{
		type: String
	},
	ID:{
		type:Number
	},
	Qty:{
		type: Number
	}

},{timestamps: true})

const data =mongoose.model('Data',dataSchema)
model.exports = data