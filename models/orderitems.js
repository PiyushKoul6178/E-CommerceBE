module.exports = (sequelize, Sequelize) => {
    const orderitems = sequelize.define("orderitems", {
      Oid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      Pid:{
          type:Sequelize.INTEGER,
          allowNull:false
      },
      Quantity:{
          type:Sequelize.INTEGER,
          allowNull:false
      },
      Price:{
          type:Sequelize.INTEGER,
          allowNull:false
      }
    });
    return orderitems;
  };