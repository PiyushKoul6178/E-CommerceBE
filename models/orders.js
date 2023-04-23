module.exports=(sequelize,Sequelize)=>{
    const order=sequelize.define("order",{
        Oid:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        Cid:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        Payid:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        DateofOrder:{
            type:Sequelize.DATEONLY,
            allowNull:false
        }
    })
    return order;
};