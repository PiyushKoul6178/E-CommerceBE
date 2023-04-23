module.exports=(sequelize,Sequelize)=>{
    const payments=sequelize.define("payments",{
        PayID:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        PayAMT:{
            type:Sequelize.INTEGER,
            allowNull:false
        }
    })
    return payments;
};