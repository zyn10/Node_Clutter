const data = require('../Models/dataModel')

//show the list of employees
const index = (req,res,next)=>{
	data.find()
	.then(response => {
		res.json({
			respinse
		})
	})
	.catch(error => {
		res.json({
			message: 'An error Occured!'
		})
	})
}

//show single data
const show = (req,res,next)=>{
	let dataID=req.body.dataID
	data.findById(dataID)
	.then(response => {
		res.json({
			response
		})
	})
	.catch(error => {
		res.json({
			message: 'An error Occured!'
		})
	})
}

//add new data
const store = (req,res,next)=>{
	let data= new data({
		name:req.body.name,
		ID: req.body.ID,
		qty: req.body.qty
	})
	data.save()
	.then(response => {
		res.json({
			response
		})
	})
	.catch(error => {
		res.json({
			message: 'An error Occured!'
		})
	})
}

//update new data
const update = (req,res,next)=>{
	let dataID= req.body.ID
	
	let updatedData = {
		name:req.body.name,
		ID: req.body.ID,
		qty: req.body.qty
	}

	data.findByIdAndUpdate(dataID,{$set:updatedData})
	.then(response => {
		res.json({
			response
		})
	})
	.catch(error => {
		res.json({
			message: 'An error Occured!'
		})
	})
}


//delete data
const destroy = (req,res,next)=>{
	let dataID= req.body.ID
	
	data.findIdAndRemove(dataID)
	.then(response => {
		res.json({
			response
		})
	})
	.catch(error => {
		res.json({
			message: 'An error Occured!'
		})
	})
}



module.exports={
	index,show,store,update,destroy
}