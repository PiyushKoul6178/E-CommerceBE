module.exports = (sequelize, Sequelize) => {
    const customer = sequelize.define("customer", {
      Cid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      Name:{
          type:Sequelize.STRING,
          allowNull:false
      },
      Email:{
          type:Sequelize.STRING,
          allowNull:false
      },
      Phone:{
          type:Sequelize.STRING,
          allowNull:false
      },
      Address:{
          type:Sequelize.STRING,
          allowNull:false
      },
      Password:{
          type:Sequelize.STRING,
          allowNull:false
      }
    });
    return customer;
  };