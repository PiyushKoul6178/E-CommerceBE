const express = require('express');
const router=express.Router();
const db = require('../models')
const order = db.order;

router.post("/",async (req,res)=>{
    const newOrder={
        Cid:req.body.cid,
        Payid:req.body.payid,
        DateofOrder:req.body.dateoforder
    }
    try{
        const result=await order.create(newOrder);
        res.status(200).json(result)
    }catch(error){
        res.status(400).json({message:error.message})
    }
})
module.exports=router;