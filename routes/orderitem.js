const express = require('express');
const router=express.Router();
const db = require('../models')
const orderitem = db.orderitem;

router.post("/",async (req,res)=>{
    const newOrderItem={
        Pid:req.body.pid,
        Quantity:req.body.quantity,
        Price:req.body.price
    }
    try{
        const result=await orderitem.create(newOrderItem);
        res.status(200).json(result)
    }catch(error){
        res.status(400).json({message:error.message})
    }
})
module.exports=router;