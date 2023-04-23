module.exports = (sequelize, Sequelize) => {
  const seller = sequelize.define("seller", {
    Sid: {
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
  return seller;
};
