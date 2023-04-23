const express = require("express");
const app = express();
const seller = require('./routes/seller')
const customer=require('./routes/customer')
const product=require('./routes/product')
const order=require('./routes/order')
const orderitem=require('./routes/orderitem')
const payment=require('./routes/payment')

const db = require("./models");

db.sequelize.sync().then(
    ()=>{
        console.log("Database Connected")
   }
).catch(
    (err) => {console.log("Error :- ", err)}
)

app.use(express.json());

app.use('/seller',seller)
app.use('/product',product)
app.use('/customer',customer)
app.use('/order',order)
app.use('/orderitem',orderitem)
app.use('/payment',payment)

app.listen(3200,()=>{
    console.log(`server started at localhost ${3000}`)
})