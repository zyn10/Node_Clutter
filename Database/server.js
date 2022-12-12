const express = require('express')
const mogoose = require('mogoose')
const bodyParser = require('body-parser')

const dataRoute= require('./routes/data')
const url ='mongodb+srv://zain10:ume12345@cluster0.no9bzgo.mongodb.net/?retryWrites=true&w=majority'
async function connect(url){
try{
	await mongoose.connect(url);
}
catch(error){
	console.error(error);
}
}
connect();
const PORT = process.env.PORT || 3000
app.listen(8000,()=>{
	console.log(`Server is running on the port ${PORT}`)
})
