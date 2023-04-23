module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define("product", {
      Pid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      Name:{
          type:Sequelize.STRING,
          allowNull:false
      },
      Desc:{
          type:Sequelize.STRING,
          allowNull:false
      },
      Price:{
          type:Sequelize.STRING,
          allowNull:false
      }
    });
    return product;
  };