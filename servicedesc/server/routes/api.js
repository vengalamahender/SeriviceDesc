  const express= require('express');
const router = express.Router();

const mongoose = require('mongoose');
const User = require('../models/user');
const Store = require('../models/store');

const db = "mongodb://uservengala:xkch421656@ds155695.mlab.com:55695/itdesc";
mongoose.Promise = global.Promise;


mongoose.connect(db,function(err){
	if(err){
		console.error("Error! " +err);
	}
});


// router.get('/',function(req,res){
// 	res.send('api works');
// 		});
router.get('/adminuser',function(req,res){
	console.log('get admin details');
	User.find({})
	.exec(function(err,adminuser){
		if(err){
					console.log("Error in adminuser");
				}else
				{
					res.json(adminuser);
					
				}
			});

		});

router.get('/allstoresdata',function(req,res){
	console.log('get admin details');
	Store.find({})
	.exec(function(err,allstoresdata){
		if(err){
					console.log("Error in allstoresdata");
				}else
				{
					res.json(allstoresdata);
					
				}
			});

		});
	
router.post('/store',function(req,res){
	console.log('post a new store');
	var newStore = new Store();
	newStore.firstName = req.body.firstName;
	newStore.lastName = req.body.lastName;
	newStore.city = req.body.city;
	newStore.street = req.body.street;
	newStore.contactnumber = req.body.contactnumber;
	newStore.country = req.body.country;
	newStore.doornumber = req.body.doornumber;
	newStore.email = req.body.email;
	newStore.password = req.body.password;
	newStore.pincode = req.body.pincode;
	newStore.services = req.body.services;
	newStore.state = req.body.state;
	newStore.save(function(err,insertedStore){
		if(err){
			console.log("error saving store");
		}else{
			res.json(insertedStore);
		}
	});
});
router.put('/allstoresdata/:id',function(req,res){
	console.log('update store details');
	Store.findByIdAndUpdate(req.params.id,
	{
		$set:{firstName:req.body.firstName,lastName:req.body.lastName,
			city:req.body.city,street:req.body.street,
			contactnumber:req.body.contactnumber,country:req.body.country,
			doornumber:req.body.doornumber,email:req.body.email,password:req.body.password,
			pincode:req.body.pincode,services:req.body.services,state:req.body.state}
	},
	{
		new: true
	},
	function(err,updatedStore){
		if(err){
			res.send("Error Updating video");
		}else{
			res.json(updatedStore);
		}
});
});
router.delete('/store/:id',function(req,res){
	console.log('Deleting a store');
	Store.findByIdAndRemove(req.params.id,function(err,deleteStore){
		if (err) {
			res.send("Error Deleting video");
		}else{
			res.json(deleteStore);
		}
	});
})




module.exports = router;