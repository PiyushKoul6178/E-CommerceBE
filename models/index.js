const Sequelize = require("sequelize");

const sequelize = new Sequelize("e_commerce","postgres","latakoul@bimlakoul",{
    host : "localhost",
    dialect : "postgres"
})

const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize

db.customer = require("./customers")(sequelize,Sequelize);
db.seller=require("./sellers")(sequelize,Sequelize);
db.product=require("./products")(sequelize,Sequelize);
db.order=require("./orders")(sequelize,Sequelize);
db.orderitem=require("./orderitems")(sequelize,Sequelize);
db.payment=require("./payments")(sequelize,Sequelize);

module.exports= db;