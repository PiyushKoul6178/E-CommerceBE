const express = require('express');
const router = express.Router();
const db = require('../models')
const customer = db.customer;

//POST
router.post('/',async (req,res)=>{

    const newCustomer = {
        Name : req.body.name,
        Email : req.body.email,
        Phone : req.body.phone,
        Address:req.body.address,
        Password:req.body.password
    }

    try{
       const result =  await customer.create(newCustomer);
       res.status(200).json(result)
    }catch(error){
        res.status(400).json({message : error.message})
    }

    // res.send("post created")

})
module.exports = router;