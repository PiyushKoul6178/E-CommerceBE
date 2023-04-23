const express = require('express');
const router=express.Router();
const db = require('../models')
const payment = db.payment;

router.post("/",async (req,res)=>{
    const newPayment={
        PayAMT:req.body.payamt
    }
    try{
        const result=await payment.create(newPayment);
        res.status(200).json(result)
    }catch(error){
        res.status(400).json({message:error.message})
    }
})
module.exports=router;