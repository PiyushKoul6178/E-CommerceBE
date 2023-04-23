const express = require('express');
const router = express.Router();
const db = require('../models')
const Product = db.product;

//POST
router.post('/',async (req,res)=>{

    const newProduct = {
        Name : req.body.name,
        Desc:req.body.desc,
        Price:req.body.price
    }

    try{
       const result =  await Product.create(newProduct);
       res.status(200).json(result)
    }catch(error){
        res.status(400).json({message : error.message})
    }

    // res.send("post created")

})
module.exports = router;